package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Postcodes struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPostcodes(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Postcodes {
	return &Postcodes{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostcodeToAddresses - postcodeToAddresses
// Returns the complete list of addresses for a postcode.
//
// Postcode searches are space and case insensitive.
//
// ### Postcode not found
//
// Please note: For postcodes that do not exist, your key is not charged, the API returns a 404 response with a response body
//
// ```
//
//	{
//	  "code": 4040,
//	  "message": "Postcode not found"
//	}
//
// ```
//
// ### Testing
//
// To test your implementation of our API we have a range of test postcodes that yield both successful and unsuccessful responses to your request. They are the following:
//
// - `ID1 1QD` Returns a successful postcode lookup response `2000`
// - `ID1 KFA` Returns "postcode not found", error `4040`
// - `ID1 CLIP` Returns "no lookups remaining", error `4020`
// - `ID1 CHOP` Returns "daily (or individual) lookup limit breached", error `4021`
//
// Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
//
// ### Multiple Residence Dataset & Pagination
//
// For keys which use the Multiple Residence dataset, there are a small number of postcodes which yield more than Royal Mail's maximum allowed return (of 100 addresses) per request. Multiple Residence data users have the option of paginating postcode queries if the limit is reached.
//
// #### Multiple Residence: Additional Query Parameters
//
// | Property | Description                                                                          |
// | -------- | ------------------------------------------------------------------------------------ |
// | `page`   | 0 indexed indicator of the page of results to receive. Defaults to `0`               |
//
// #### Multiple Residence: Additional Response Fields
//
// | Property | Description                                                                               |
// | -------- | ----------------------------------------------------------------------------------------- |
// | `page`   | `number` Indicates current page number                                                    |
// | `total`  | `number` Indicates the maximum number of delivery points plus residences at this postcode |
// | `limit`  | `number` Maximum number of results per request. Fixed at 100 for this method              |
//
// ### Pricing
//
// Per lookup charges are applied. Empty responses are not charged.
//
// ### Data Source
//
// Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
func (s *Postcodes) PostcodeToAddresses(ctx context.Context, request operations.PostcodeToAddressesRequest) (*operations.PostcodeToAddressesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/postcodes/{postcode}", request.PathParams)

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

	res := &operations.PostcodeToAddressesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PostcodeToAddressResponseSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostcodeToAddressResponseSchema = out
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
