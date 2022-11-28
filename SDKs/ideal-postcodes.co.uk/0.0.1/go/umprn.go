package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Umprn struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUmprn(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Umprn {
	return &Umprn{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// LookupUmprn - lookupUMPRN
// UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.
//
// ### Lookup a UMPRN
//
// Returns an address identified via its UMPRN.
//
// ### Testing
//
// To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following:
//
// To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following
//
// - `0` Returns a successful UMPRN lookup response `2000`
// - `-1` Returns "UMPRN not found", error `4044`
// - `-2` Returns "no lookups remaining", error `4020`
// - `-3` Returns "daily (or individual) lookup limit breached", error `4021`
//
// Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
//
// ### Pricing
//
// Per lookup charges apply. Empty responses are not charged.
//
// ### Data Source
//
// Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
func (s *Umprn) LookupUmprn(ctx context.Context, request operations.LookupUmprnRequest) (*operations.LookupUmprnResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/umprn/{umprn}", request.PathParams)

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

	res := &operations.LookupUmprnResponse{
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
