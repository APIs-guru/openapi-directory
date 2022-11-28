package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Autocomplete struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAutocomplete(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Autocomplete {
	return &Autocomplete{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddressAutocomplete - addressAutocomplete
// Use `/autocomplete` to retrieve address suggestions for a partial string.
//
// ### Implementing Autocomplete
//
// Retrieving addresses using autocomplete is a 2 step process.
//
// 1. Retrieve partial address suggestions via `/autocomplete/addresses`
// 2. Retrieve the entire address by following the URL provided by the suggestion
//
// Step 2 will decrement your lookup balance.
//
// Please note, this API is [not intended to be a free standalone resource](#pricing).
//
// ### Testing
//
// `ID1 1QD` will return address suggestions, that when retrieved via `/udprn/:id` will not affect your balance.
//
// ### Notes
//
// #### Suggestion Format
//
// The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as is.
//
// #### Querying with a Postcode
//
// If a postcode is passed as a query, all addresses for that postcode will be listed as the result if the limit parameter is not supplied. If a postcode forms only part of the query, your autocomplete results will be filtered by that postcode.
//
// #### Authentication
//
// When using the autocomplete API, low request latency is essential in delivering a speedy list of suggestions to the user. For this reason we recommend using query string authentication (i.e. `api_key=foo`) rather than HTTP Header authentication (i.e. `Authorization: IDEALPOSTCODES api_key="foo"`). The latter will incur additional latency as most browsers will trigger a preflight OPTIONS request for each key press.
//
// #### Querying Multiple Residence
//
// For Multiple Residence enabled keys, any Multiple Residence households will also return a UMPRN id, which can be retrieved with the `/umprn/` endpoint. Note that Multiple Residence households will always have a parent premise with a UDPRN, and a single UDPRN premise may have many Multiple Residence households with different UMPRNs. For instance:
//
// ```
//
//	{
//	  "result": {
//	    "hits": [
//	      {
//	        "suggestion": "10 Downings, London, E6",
//	        "urls": {
//	          "udprn": "/v1/udprn/7944730"
//	        },
//	        "udprn": 7944730
//	      },
//	      {
//	        "suggestion": "10 Downing Grove, Hull, HU9",
//	        "urls": {
//	          "udprn": "/v1/udprn/11168744",
//	          "umprn": "/v1/umprn/882919"
//	        },
//	        "udprn": 11168744,
//	        "umprn": 882919
//	      }
//	    ]
//	  },
//	  "code": 2000,
//	  "message": "Success"
//	}
//
// ```
//
// ### Rate Limiting
//
// You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.
//
// | Header                  | Description |
// | ----------------------- | -------------------------------------------------------------------------------------- |
// | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |
// | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |
// | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |
//
// ### Pricing
//
// This API currently does not affect your balance. However, subsequent searches require a paid request (e.g. a UDPRN search). This paid request, will yield the complete address.
//
// Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension.
//
// ### Data Source
//
// Royal Mail (Postcode Address File).
func (s *Autocomplete) AddressAutocomplete(ctx context.Context, request operations.AddressAutocompleteRequest) (*operations.AddressAutocompleteResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/autocomplete/addresses"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddressAutocompleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AddressAutocompleteResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddressAutocompleteResponseSchema = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AddressLookupResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddressLookupResponseSchema = out
		}
	case httpRes.StatusCode == 402:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AddressLookupResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddressLookupResponseSchema = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AddressLookupResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddressLookupResponseSchema = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AddressLookupResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddressLookupResponseSchema = out
		}
	case httpRes.StatusCode == 503:
	}

	return res, nil
}
