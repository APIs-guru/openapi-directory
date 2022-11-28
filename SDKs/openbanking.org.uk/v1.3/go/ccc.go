package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Ccc struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCcc(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Ccc {
	return &Ccc{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCommercialCreditCards - Gets a list of all `Commerical Credit Card` objects.
func (s *Ccc) GetCommercialCreditCards(ctx context.Context, request operations.GetCommercialCreditCardsRequest) (*operations.GetCommercialCreditCardsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/commercial-credit-cards"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommercialCreditCardsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCardsErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

// HeadCommercialCreditCards - Gets header information on the current set of `Commerical Credit Card` data
func (s *Ccc) HeadCommercialCreditCards(ctx context.Context, request operations.HeadCommercialCreditCardsRequest) (*operations.HeadCommercialCreditCardsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/commercial-credit-cards"

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadCommercialCreditCardsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NoResponse = out
		}
	}

	return res, nil
}
