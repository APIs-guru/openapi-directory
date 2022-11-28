package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type DataExporterConfigs struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDataExporterConfigs(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *DataExporterConfigs {
	return &DataExporterConfigs{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DataExporterTemplate - Get all data exporter configs
// Get all data exporter configs
func (s *DataExporterConfigs) DataExporterTemplate(ctx context.Context, request operations.DataExporterTemplateRequest) (*operations.DataExporterTemplateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/data-exporter-configs/_template"

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

	res := &operations.DataExporterTemplateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DataExporterConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DataExporterConfig = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// CreateBulkDataExporterConfigs - Create a new data exporter configs
// Create a new data exporter configs
func (s *DataExporterConfigs) CreateBulkDataExporterConfigs(ctx context.Context, request operations.CreateBulkDataExporterConfigsRequest) (*operations.CreateBulkDataExporterConfigsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/data-exporter-configs/_bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateBulkDataExporterConfigsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.CreateBulkDataExporterConfigs200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateBulkDataExporterConfigs200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// CreateDataExporterConfig - Create a new data exporter config
// Create a new data exporter config
func (s *DataExporterConfigs) CreateDataExporterConfig(ctx context.Context, request operations.CreateDataExporterConfigRequest) (*operations.CreateDataExporterConfigResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/data-exporter-configs"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateDataExporterConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DataExporterConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DataExporterConfig = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteDataExporterConfig - Delete a data exporter config
// Delete a data exporter config
func (s *DataExporterConfigs) DeleteDataExporterConfig(ctx context.Context, request operations.DeleteDataExporterConfigRequest) (*operations.DeleteDataExporterConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/data-exporter-configs/{dataExporterConfigId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteDataExporterConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Deleted
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Deleted = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeletebulkDataExporterConfig - Delete a data exporter config
// Delete a data exporter config
func (s *DataExporterConfigs) DeletebulkDataExporterConfig(ctx context.Context, request operations.DeletebulkDataExporterConfigRequest) (*operations.DeletebulkDataExporterConfigResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/data-exporter-configs/_bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeletebulkDataExporterConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.DeletebulkDataExporterConfig200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeletebulkDataExporterConfig200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// FindAllDataExporters - Get all data exporter configs
// Get all data exporter configs
func (s *DataExporterConfigs) FindAllDataExporters(ctx context.Context, request operations.FindAllDataExportersRequest) (*operations.FindAllDataExportersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/data-exporter-configs"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FindAllDataExportersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.DataExporterConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DataExporterConfigs = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// FindDataExporterConfigByID - Get a data exporter config
// Get a data exporter config
func (s *DataExporterConfigs) FindDataExporterConfigByID(ctx context.Context, request operations.FindDataExporterConfigByIDRequest) (*operations.FindDataExporterConfigByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/data-exporter-configs/{dataExporterConfigId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FindDataExporterConfigByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DataExporterConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DataExporterConfig = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PatchBulkDataExporterConfig - Update a data exporter configs with a diff
// Update a data exporter configs with a diff
func (s *DataExporterConfigs) PatchBulkDataExporterConfig(ctx context.Context, request operations.PatchBulkDataExporterConfigRequest) (*operations.PatchBulkDataExporterConfigResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/data-exporter-configs/_bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchBulkDataExporterConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.PatchBulkDataExporterConfig200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchBulkDataExporterConfig200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PatchDataExporterConfig - Update a data exporter config with a diff
// Update a data exporter config with a diff
func (s *DataExporterConfigs) PatchDataExporterConfig(ctx context.Context, request operations.PatchDataExporterConfigRequest) (*operations.PatchDataExporterConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/data-exporter-configs/{dataExporterConfigId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchDataExporterConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DataExporterConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DataExporterConfig = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// UpdateBulkDataExporterConfig - Update a data exporter configs
// Update a data exporter configs
func (s *DataExporterConfigs) UpdateBulkDataExporterConfig(ctx context.Context, request operations.UpdateBulkDataExporterConfigRequest) (*operations.UpdateBulkDataExporterConfigResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/data-exporter-configs/_bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateBulkDataExporterConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.UpdateBulkDataExporterConfig200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateBulkDataExporterConfig200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// UpdateDataExporterConfig - Update a data exporter config
// Update a data exporter config
func (s *DataExporterConfigs) UpdateDataExporterConfig(ctx context.Context, request operations.UpdateDataExporterConfigRequest) (*operations.UpdateDataExporterConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/data-exporter-configs/{dataExporterConfigId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateDataExporterConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DataExporterConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DataExporterConfig = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
