package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Auth struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAuth(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Auth {
	return &Auth{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetBasicAuthUserPasswd - Prompts the user for authorization using HTTP Basic Auth.
func (s *Auth) GetBasicAuthUserPasswd(ctx context.Context, request operations.GetBasicAuthUserPasswdRequest) (*operations.GetBasicAuthUserPasswdResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/basic-auth/{user}/{passwd}", request.PathParams)

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

	res := &operations.GetBasicAuthUserPasswdResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetBearer - Prompts the user for authorization using bearer authentication.
func (s *Auth) GetBearer(ctx context.Context, request operations.GetBearerRequest) (*operations.GetBearerResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bearer"

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

	res := &operations.GetBearerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDigestAuthQopUserPasswd - Prompts the user for authorization using Digest Auth.
func (s *Auth) GetDigestAuthQopUserPasswd(ctx context.Context, request operations.GetDigestAuthQopUserPasswdRequest) (*operations.GetDigestAuthQopUserPasswdResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/digest-auth/{qop}/{user}/{passwd}", request.PathParams)

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

	res := &operations.GetDigestAuthQopUserPasswdResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDigestAuthQopUserPasswdAlgorithm - Prompts the user for authorization using Digest Auth + Algorithm.
func (s *Auth) GetDigestAuthQopUserPasswdAlgorithm(ctx context.Context, request operations.GetDigestAuthQopUserPasswdAlgorithmRequest) (*operations.GetDigestAuthQopUserPasswdAlgorithmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}", request.PathParams)

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

	res := &operations.GetDigestAuthQopUserPasswdAlgorithmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDigestAuthQopUserPasswdAlgorithmStaleAfter - Prompts the user for authorization using Digest Auth + Algorithm.
// allow settings the stale_after argument.
func (s *Auth) GetDigestAuthQopUserPasswdAlgorithmStaleAfter(ctx context.Context, request operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest) (*operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}", request.PathParams)

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

	res := &operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetHiddenBasicAuthUserPasswd - Prompts the user for authorization using HTTP Basic Auth.
func (s *Auth) GetHiddenBasicAuthUserPasswd(ctx context.Context, request operations.GetHiddenBasicAuthUserPasswdRequest) (*operations.GetHiddenBasicAuthUserPasswdResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/hidden-basic-auth/{user}/{passwd}", request.PathParams)

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

	res := &operations.GetHiddenBasicAuthUserPasswdResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
