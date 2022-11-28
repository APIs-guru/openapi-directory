package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Atm struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAtm(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Atm {
	return &Atm{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAtms - Gets a list of all `ATM` objects.
func (s *Atm) GetAtms(ctx context.Context, request operations.GetAtmsRequest) (*operations.GetAtmsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/atms"

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

	res := &operations.GetAtmsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtmsErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

// HeadAtms - Gets header information on the current set of `ATM` data
func (s *Atm) HeadAtms(ctx context.Context, request operations.HeadAtmsRequest) (*operations.HeadAtmsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/atms"

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

	res := &operations.HeadAtmsResponse{
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
