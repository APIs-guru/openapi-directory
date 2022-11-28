package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Projects struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProjects(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Projects {
	return &Projects{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettings - Get the ContainerThreatDetectionSettings resource.
func (s *Projects) SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(ctx context.Context, request operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest) (*operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta2/{name}", request.PathParams)

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

	res := &operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContainerThreatDetectionSettings
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainerThreatDetectionSettings = out
		}
	}

	return res, nil
}

// SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings - Update the ContainerThreatDetectionSettings resource.
func (s *Projects) SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings(ctx context.Context, request operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest) (*operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta2/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContainerThreatDetectionSettings
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainerThreatDetectionSettings = out
		}
	}

	return res, nil
}

// SecuritycenterProjectsWebSecurityScannerSettingsCalculate - Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.
func (s *Projects) SecuritycenterProjectsWebSecurityScannerSettingsCalculate(ctx context.Context, request operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest) (*operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta2/{name}:calculate", request.PathParams)

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

	res := &operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.WebSecurityScannerSettings
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebSecurityScannerSettings = out
		}
	}

	return res, nil
}
