package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type QualityRetentionProfiles struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewQualityRetentionProfiles(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *QualityRetentionProfiles {
	return &QualityRetentionProfiles{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateNetworkCameraQualityRetentionProfile - Creates new quality retention profile for this network.
// Creates new quality retention profile for this network.
func (s *QualityRetentionProfiles) CreateNetworkCameraQualityRetentionProfile(ctx context.Context, request operations.CreateNetworkCameraQualityRetentionProfileRequest) (*operations.CreateNetworkCameraQualityRetentionProfileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateNetworkCameraQualityRetentionProfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateNetworkCameraQualityRetentionProfile200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteNetworkCameraQualityRetentionProfile - Delete an existing quality retention profile for this network.
// Delete an existing quality retention profile for this network.
func (s *QualityRetentionProfiles) DeleteNetworkCameraQualityRetentionProfile(ctx context.Context, request operations.DeleteNetworkCameraQualityRetentionProfileRequest) (*operations.DeleteNetworkCameraQualityRetentionProfileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteNetworkCameraQualityRetentionProfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetNetworkCameraQualityRetentionProfile - Retrieve a single quality retention profile
// Retrieve a single quality retention profile
func (s *QualityRetentionProfiles) GetNetworkCameraQualityRetentionProfile(ctx context.Context, request operations.GetNetworkCameraQualityRetentionProfileRequest) (*operations.GetNetworkCameraQualityRetentionProfileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkCameraQualityRetentionProfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetworkCameraQualityRetentionProfile200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkCameraQualityRetentionProfiles - List the quality retention profiles for this network
// List the quality retention profiles for this network
func (s *QualityRetentionProfiles) GetNetworkCameraQualityRetentionProfiles(ctx context.Context, request operations.GetNetworkCameraQualityRetentionProfilesRequest) (*operations.GetNetworkCameraQualityRetentionProfilesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkCameraQualityRetentionProfilesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetworkCameraQualityRetentionProfiles200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkCameraQualityRetentionProfile - Update an existing quality retention profile for this network.
// Update an existing quality retention profile for this network.
func (s *QualityRetentionProfiles) UpdateNetworkCameraQualityRetentionProfile(ctx context.Context, request operations.UpdateNetworkCameraQualityRetentionProfileRequest) (*operations.UpdateNetworkCameraQualityRetentionProfileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateNetworkCameraQualityRetentionProfileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateNetworkCameraQualityRetentionProfile200ApplicationJSONObject = out
		}
	}

	return res, nil
}
