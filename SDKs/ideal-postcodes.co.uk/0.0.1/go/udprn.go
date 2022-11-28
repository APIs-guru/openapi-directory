package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Udprn struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUdprn(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Udprn {
	return &Udprn{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// LookupUdprn - lookupUDPRN
// Returns an address identified via its Unique Delivery Point Reference
// Number (UDPRN).
//
// You may find it useful to store UDPRN information as it can be used to
// retrieve the most recent information for an address. It can also be used
// to test for a "decommissioned" address.
//
// UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any
// premise on the Postcode Address File. It's essentially a unique identifier
// for every address in the UK that Royal Mail has in its database.
//
// ### Testing
//
// To test your implementation of our API we have a range of test UDPRNs
// that yield both successful and unsuccessful responses to your request.
// They are the following
//
// - <code>0</code> Returns a successful UDPRN lookup response <code>2000</code>
// - <code>-1</code> Returns "UDPRN not found", error <code>4044</code>
// - <code>-2</code> Returns "no lookups remaining", error <code>4020</code>
// - <code>-3</code> Returns "daily (or individual) lookup limit breached", error <code>4021</code>
//
// Test requests will undergo usual authentication and restriction rules (
// individual and daily lookup limits) to surface any problems you may have
// during implementation. However, it will not count towards a postcode
// lookup on your key.
//
// ### Pricing
//
// Per lookup charges apply. Empty responses are not charged.
//
// ### Data Source
//
// Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open)
func (s *Udprn) LookupUdprn(ctx context.Context, request operations.LookupUdprnRequest) (*operations.LookupUdprnResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/udprn/{udprn}", request.PathParams)

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

	res := &operations.LookupUdprnResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AddressLookupResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddressLookupResponseSchema = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseSchema = out
		}
	case httpRes.StatusCode == 402:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseSchema = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseSchema = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseSchema = out
		}
	case httpRes.StatusCode == 503:
	}

	return res, nil
}
