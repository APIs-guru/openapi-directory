package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type StatusCodes struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewStatusCodes(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *StatusCodes {
	return &StatusCodes{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteStatusCodes - Return status code or random status code if more than one are given
func (s *StatusCodes) DeleteStatusCodes(ctx context.Context, request operations.DeleteStatusCodesRequest) (*operations.DeleteStatusCodesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/status/{codes}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteStatusCodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 100:
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetStatusCodes - Return status code or random status code if more than one are given
func (s *StatusCodes) GetStatusCodes(ctx context.Context, request operations.GetStatusCodesRequest) (*operations.GetStatusCodesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/status/{codes}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStatusCodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 100:
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PatchStatusCodes - Return status code or random status code if more than one are given
func (s *StatusCodes) PatchStatusCodes(ctx context.Context, request operations.PatchStatusCodesRequest) (*operations.PatchStatusCodesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/status/{codes}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchStatusCodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 100:
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostStatusCodes - Return status code or random status code if more than one are given
func (s *StatusCodes) PostStatusCodes(ctx context.Context, request operations.PostStatusCodesRequest) (*operations.PostStatusCodesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/status/{codes}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostStatusCodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 100:
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PutStatusCodes - Return status code or random status code if more than one are given
func (s *StatusCodes) PutStatusCodes(ctx context.Context, request operations.PutStatusCodesRequest) (*operations.PutStatusCodesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/status/{codes}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutStatusCodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 100:
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// TraceStatusCodes - Return status code or random status code if more than one are given
func (s *StatusCodes) TraceStatusCodes(ctx context.Context, request operations.TraceStatusCodesRequest) (*operations.TraceStatusCodesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/status/{codes}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "TRACE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TraceStatusCodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 100:
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
