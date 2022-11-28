package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Enterprises struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEnterprises(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Enterprises {
	return &Enterprises{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SmartdevicemanagementEnterprisesDevicesExecuteCommand - Executes a command to device managed by the enterprise.
func (s *Enterprises) SmartdevicemanagementEnterprisesDevicesExecuteCommand(ctx context.Context, request operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest) (*operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:executeCommand", request.PathParams)

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse = out
		}
	}

	return res, nil
}

// SmartdevicemanagementEnterprisesDevicesList - Lists devices managed by the enterprise.
func (s *Enterprises) SmartdevicemanagementEnterprisesDevicesList(ctx context.Context, request operations.SmartdevicemanagementEnterprisesDevicesListRequest) (*operations.SmartdevicemanagementEnterprisesDevicesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/devices", request.PathParams)

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

	res := &operations.SmartdevicemanagementEnterprisesDevicesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleHomeEnterpriseSdmV1ListDevicesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleHomeEnterpriseSdmV1ListDevicesResponse = out
		}
	}

	return res, nil
}

// SmartdevicemanagementEnterprisesStructuresList - Lists structures managed by the enterprise.
func (s *Enterprises) SmartdevicemanagementEnterprisesStructuresList(ctx context.Context, request operations.SmartdevicemanagementEnterprisesStructuresListRequest) (*operations.SmartdevicemanagementEnterprisesStructuresListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/structures", request.PathParams)

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

	res := &operations.SmartdevicemanagementEnterprisesStructuresListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleHomeEnterpriseSdmV1ListStructuresResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleHomeEnterpriseSdmV1ListStructuresResponse = out
		}
	}

	return res, nil
}

// SmartdevicemanagementEnterprisesStructuresRoomsGet - Gets a room managed by the enterprise.
func (s *Enterprises) SmartdevicemanagementEnterprisesStructuresRoomsGet(ctx context.Context, request operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest) (*operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleHomeEnterpriseSdmV1Room
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleHomeEnterpriseSdmV1Room = out
		}
	}

	return res, nil
}

// SmartdevicemanagementEnterprisesStructuresRoomsList - Lists rooms managed by the enterprise.
func (s *Enterprises) SmartdevicemanagementEnterprisesStructuresRoomsList(ctx context.Context, request operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest) (*operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/rooms", request.PathParams)

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

	res := &operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleHomeEnterpriseSdmV1ListRoomsResponse = out
		}
	}

	return res, nil
}
