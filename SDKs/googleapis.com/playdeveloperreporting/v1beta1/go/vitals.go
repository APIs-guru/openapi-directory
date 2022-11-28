package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Vitals struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVitals(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Vitals {
	return &Vitals{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet - Describes the properties of the metric set.
func (s *Vitals) PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet(ctx context.Context, request operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest) (*operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet = out
		}
	}

	return res, nil
}

// PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery - Queries the metrics in the metric set.
func (s *Vitals) PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery(ctx context.Context, request operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest) (*operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}:query", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse = out
		}
	}

	return res, nil
}
