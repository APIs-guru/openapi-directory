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

// DialogflowProjectsLocationsAgentEntityTypesBatchDelete - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentEntityTypesBatchDelete(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest) (*operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/entityTypes:batchDelete", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentEntityTypesBatchUpdate - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentEntityTypesBatchUpdate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest) (*operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/entityTypes:batchUpdate", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest) (*operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/entities:batchCreate", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest) (*operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/entities:batchDelete", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest) (*operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/entities:batchUpdate", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentEnvironmentsCreate - Creates an agent environment.
func (s *Projects) DialogflowProjectsLocationsAgentEnvironmentsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEnvironmentsCreateRequest) (*operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/environments", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Environment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Environment = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentEnvironmentsGetHistory - Gets the history of the specified environment.
func (s *Projects) DialogflowProjectsLocationsAgentEnvironmentsGetHistory(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest) (*operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/history", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2EnvironmentHistory
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2EnvironmentHistory = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentEnvironmentsList - Returns the list of all non-default environments of the specified agent.
func (s *Projects) DialogflowProjectsLocationsAgentEnvironmentsList(ctx context.Context, request operations.DialogflowProjectsLocationsAgentEnvironmentsListRequest) (*operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/environments", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListEnvironmentsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListEnvironmentsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentExport - Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
func (s *Projects) DialogflowProjectsLocationsAgentExport(ctx context.Context, request operations.DialogflowProjectsLocationsAgentExportRequest) (*operations.DialogflowProjectsLocationsAgentExportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent:export", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentExportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentGetValidationResult - Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
func (s *Projects) DialogflowProjectsLocationsAgentGetValidationResult(ctx context.Context, request operations.DialogflowProjectsLocationsAgentGetValidationResultRequest) (*operations.DialogflowProjectsLocationsAgentGetValidationResultResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent/validationResult", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentGetValidationResultResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ValidationResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ValidationResult = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentImport - Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentImport(ctx context.Context, request operations.DialogflowProjectsLocationsAgentImportRequest) (*operations.DialogflowProjectsLocationsAgentImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent:import", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentIntentsBatchDelete - Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentIntentsBatchDelete(ctx context.Context, request operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest) (*operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/intents:batchDelete", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentIntentsBatchUpdate - Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentIntentsBatchUpdate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest) (*operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/intents:batchUpdate", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentIntentsCreate - Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentIntentsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentIntentsCreateRequest) (*operations.DialogflowProjectsLocationsAgentIntentsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/intents", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentIntentsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Intent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Intent = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentIntentsList - Returns the list of all intents in the specified agent.
func (s *Projects) DialogflowProjectsLocationsAgentIntentsList(ctx context.Context, request operations.DialogflowProjectsLocationsAgentIntentsListRequest) (*operations.DialogflowProjectsLocationsAgentIntentsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/intents", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentIntentsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListIntentsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListIntentsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentRestore - Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentRestore(ctx context.Context, request operations.DialogflowProjectsLocationsAgentRestoreRequest) (*operations.DialogflowProjectsLocationsAgentRestoreResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent:restore", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentRestoreResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentSearch - Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
func (s *Projects) DialogflowProjectsLocationsAgentSearch(ctx context.Context, request operations.DialogflowProjectsLocationsAgentSearchRequest) (*operations.DialogflowProjectsLocationsAgentSearchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent:search", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2SearchAgentsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2SearchAgentsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentSessionsContextsCreate - Creates a context. If the specified context already exists, overrides the context.
func (s *Projects) DialogflowProjectsLocationsAgentSessionsContextsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentSessionsContextsCreateRequest) (*operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/contexts", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Context
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Context = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentSessionsContextsList - Returns the list of all contexts in the specified session.
func (s *Projects) DialogflowProjectsLocationsAgentSessionsContextsList(ctx context.Context, request operations.DialogflowProjectsLocationsAgentSessionsContextsListRequest) (*operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/contexts", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListContextsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListContextsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentSessionsDeleteContexts - Deletes all active contexts in the specified session.
func (s *Projects) DialogflowProjectsLocationsAgentSessionsDeleteContexts(ctx context.Context, request operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest) (*operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/contexts", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse{
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

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentSessionsDetectIntent - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
func (s *Projects) DialogflowProjectsLocationsAgentSessionsDetectIntent(ctx context.Context, request operations.DialogflowProjectsLocationsAgentSessionsDetectIntentRequest) (*operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{session}:detectIntent", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2DetectIntentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2DetectIntentResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentSessionsEntityTypesCreate - Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
func (s *Projects) DialogflowProjectsLocationsAgentSessionsEntityTypesCreate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest) (*operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/entityTypes", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2SessionEntityType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2SessionEntityType = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentSessionsEntityTypesList - Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
func (s *Projects) DialogflowProjectsLocationsAgentSessionsEntityTypesList(ctx context.Context, request operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest) (*operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/entityTypes", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListSessionEntityTypesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListSessionEntityTypesResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentTrain - Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsAgentTrain(ctx context.Context, request operations.DialogflowProjectsLocationsAgentTrainRequest) (*operations.DialogflowProjectsLocationsAgentTrainResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent:train", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentTrainResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentVersionsCreate - Creates an agent version. The new version points to the agent instance in the "default" environment.
func (s *Projects) DialogflowProjectsLocationsAgentVersionsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsAgentVersionsCreateRequest) (*operations.DialogflowProjectsLocationsAgentVersionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/versions", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentVersionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Version
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Version = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAgentVersionsList - Returns the list of all versions of the specified agent.
func (s *Projects) DialogflowProjectsLocationsAgentVersionsList(ctx context.Context, request operations.DialogflowProjectsLocationsAgentVersionsListRequest) (*operations.DialogflowProjectsLocationsAgentVersionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/versions", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAgentVersionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListVersionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListVersionsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsAnswerRecordsList - Returns the list of all answer records in the specified project in reverse chronological order.
func (s *Projects) DialogflowProjectsLocationsAnswerRecordsList(ctx context.Context, request operations.DialogflowProjectsLocationsAnswerRecordsListRequest) (*operations.DialogflowProjectsLocationsAnswerRecordsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/answerRecords", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsAnswerRecordsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListAnswerRecordsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListAnswerRecordsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationDatasetsCreate - Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset
func (s *Projects) DialogflowProjectsLocationsConversationDatasetsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsConversationDatasetsCreateRequest) (*operations.DialogflowProjectsLocationsConversationDatasetsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversationDatasets", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationDatasetsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationDatasetsImportConversationData - Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
func (s *Projects) DialogflowProjectsLocationsConversationDatasetsImportConversationData(ctx context.Context, request operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest) (*operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:importConversationData", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationDatasetsList - Returns the list of all conversation datasets in the specified project and location.
func (s *Projects) DialogflowProjectsLocationsConversationDatasetsList(ctx context.Context, request operations.DialogflowProjectsLocationsConversationDatasetsListRequest) (*operations.DialogflowProjectsLocationsConversationDatasetsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversationDatasets", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationDatasetsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListConversationDatasetsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListConversationDatasetsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationModelsCreate - Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
func (s *Projects) DialogflowProjectsLocationsConversationModelsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsConversationModelsCreateRequest) (*operations.DialogflowProjectsLocationsConversationModelsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversationModels", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationModelsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationModelsDeploy - Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
func (s *Projects) DialogflowProjectsLocationsConversationModelsDeploy(ctx context.Context, request operations.DialogflowProjectsLocationsConversationModelsDeployRequest) (*operations.DialogflowProjectsLocationsConversationModelsDeployResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:deploy", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationModelsDeployResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationModelsEvaluationsCreate - Creates evaluation of a conversation model.
func (s *Projects) DialogflowProjectsLocationsConversationModelsEvaluationsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest) (*operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/evaluations", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationModelsEvaluationsList - Lists evaluations of a conversation model.
func (s *Projects) DialogflowProjectsLocationsConversationModelsEvaluationsList(ctx context.Context, request operations.DialogflowProjectsLocationsConversationModelsEvaluationsListRequest) (*operations.DialogflowProjectsLocationsConversationModelsEvaluationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/evaluations", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationModelsEvaluationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationModelsList - Lists conversation models.
func (s *Projects) DialogflowProjectsLocationsConversationModelsList(ctx context.Context, request operations.DialogflowProjectsLocationsConversationModelsListRequest) (*operations.DialogflowProjectsLocationsConversationModelsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversationModels", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationModelsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListConversationModelsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListConversationModelsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationModelsUndeploy - Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
func (s *Projects) DialogflowProjectsLocationsConversationModelsUndeploy(ctx context.Context, request operations.DialogflowProjectsLocationsConversationModelsUndeployRequest) (*operations.DialogflowProjectsLocationsConversationModelsUndeployResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:undeploy", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationModelsUndeployResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
func (s *Projects) DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig(ctx context.Context, request operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest) (*operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{conversationProfile}:clearSuggestionFeatureConfig", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationProfilesCreate - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
func (s *Projects) DialogflowProjectsLocationsConversationProfilesCreate(ctx context.Context, request operations.DialogflowProjectsLocationsConversationProfilesCreateRequest) (*operations.DialogflowProjectsLocationsConversationProfilesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversationProfiles", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationProfilesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ConversationProfile
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ConversationProfile = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationProfilesList - Returns the list of all conversation profiles in the specified project.
func (s *Projects) DialogflowProjectsLocationsConversationProfilesList(ctx context.Context, request operations.DialogflowProjectsLocationsConversationProfilesListRequest) (*operations.DialogflowProjectsLocationsConversationProfilesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversationProfiles", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationProfilesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListConversationProfilesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListConversationProfilesResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
func (s *Projects) DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig(ctx context.Context, request operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest) (*operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{conversationProfile}:setSuggestionFeatureConfig", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsComplete - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
func (s *Projects) DialogflowProjectsLocationsConversationsComplete(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsCompleteRequest) (*operations.DialogflowProjectsLocationsConversationsCompleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:complete", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsCompleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Conversation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Conversation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsCreate - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
func (s *Projects) DialogflowProjectsLocationsConversationsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsCreateRequest) (*operations.DialogflowProjectsLocationsConversationsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversations", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Conversation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Conversation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsList - Returns the list of all conversations in the specified project.
func (s *Projects) DialogflowProjectsLocationsConversationsList(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsListRequest) (*operations.DialogflowProjectsLocationsConversationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/conversations", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListConversationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListConversationsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsMessagesList - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
func (s *Projects) DialogflowProjectsLocationsConversationsMessagesList(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsMessagesListRequest) (*operations.DialogflowProjectsLocationsConversationsMessagesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/messages", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsMessagesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListMessagesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListMessagesResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsParticipantsAnalyzeContent - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
func (s *Projects) DialogflowProjectsLocationsConversationsParticipantsAnalyzeContent(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest) (*operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{participant}:analyzeContent", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2AnalyzeContentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2AnalyzeContentResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsParticipantsCreate - Creates a new participant in a conversation.
func (s *Projects) DialogflowProjectsLocationsConversationsParticipantsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsParticipantsCreateRequest) (*operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/participants", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Participant
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Participant = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsParticipantsList - Returns the list of all participants in the specified conversation.
func (s *Projects) DialogflowProjectsLocationsConversationsParticipantsList(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsParticipantsListRequest) (*operations.DialogflowProjectsLocationsConversationsParticipantsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/participants", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsParticipantsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListParticipantsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListParticipantsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles - Gets suggested articles for a participant based on specific historical messages.
func (s *Projects) DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest) (*operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/suggestions:suggestArticles", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2SuggestArticlesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2SuggestArticlesResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers - Gets suggested faq answers for a participant based on specific historical messages.
func (s *Projects) DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest) (*operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/suggestions:suggestFaqAnswers", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2SuggestFaqAnswersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2SuggestFaqAnswersResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies - Gets smart replies for a participant based on specific historical messages.
func (s *Projects) DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies(ctx context.Context, request operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest) (*operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/suggestions:suggestSmartReplies", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2SuggestSmartRepliesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2SuggestSmartRepliesResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsDeleteAgent - Deletes the specified agent.
func (s *Projects) DialogflowProjectsLocationsDeleteAgent(ctx context.Context, request operations.DialogflowProjectsLocationsDeleteAgentRequest) (*operations.DialogflowProjectsLocationsDeleteAgentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DialogflowProjectsLocationsDeleteAgentResponse{
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

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsGetAgent - Retrieves the specified agent.
func (s *Projects) DialogflowProjectsLocationsGetAgent(ctx context.Context, request operations.DialogflowProjectsLocationsGetAgentRequest) (*operations.DialogflowProjectsLocationsGetAgentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsGetAgentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Agent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Agent = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesCreate - Creates a knowledge base.
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesCreate(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesCreateRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/knowledgeBases", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2KnowledgeBase
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2KnowledgeBase = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/documents", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesDocumentsDelete - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesDocumentsDelete(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesDocumentsExport - Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesDocumentsExport(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:export", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesDocumentsImport - Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesDocumentsImport(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/documents:import", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesDocumentsList - Returns the list of all documents of the knowledge base.
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesDocumentsList(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/documents", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListDocumentsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListDocumentsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesDocumentsReload - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesDocumentsReload(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:reload", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsKnowledgeBasesList - Returns the list of all knowledge bases of the specified agent.
func (s *Projects) DialogflowProjectsLocationsKnowledgeBasesList(ctx context.Context, request operations.DialogflowProjectsLocationsKnowledgeBasesListRequest) (*operations.DialogflowProjectsLocationsKnowledgeBasesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/knowledgeBases", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsKnowledgeBasesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2ListKnowledgeBasesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2ListKnowledgeBasesResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsList - Lists information about the supported locations for this service.
func (s *Projects) DialogflowProjectsLocationsList(ctx context.Context, request operations.DialogflowProjectsLocationsListRequest) (*operations.DialogflowProjectsLocationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}/locations", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudLocationListLocationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudLocationListLocationsResponse = out
		}
	}

	return res, nil
}

// DialogflowProjectsLocationsSetAgent - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
func (s *Projects) DialogflowProjectsLocationsSetAgent(ctx context.Context, request operations.DialogflowProjectsLocationsSetAgentRequest) (*operations.DialogflowProjectsLocationsSetAgentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/agent", request.PathParams)

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

	res := &operations.DialogflowProjectsLocationsSetAgentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDialogflowV2Agent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDialogflowV2Agent = out
		}
	}

	return res, nil
}

// DialogflowProjectsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
func (s *Projects) DialogflowProjectsOperationsCancel(ctx context.Context, request operations.DialogflowProjectsOperationsCancelRequest) (*operations.DialogflowProjectsOperationsCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:cancel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.DialogflowProjectsOperationsCancelResponse{
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

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// DialogflowProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
func (s *Projects) DialogflowProjectsOperationsGet(ctx context.Context, request operations.DialogflowProjectsOperationsGetRequest) (*operations.DialogflowProjectsOperationsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}", request.PathParams)

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

	res := &operations.DialogflowProjectsOperationsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// DialogflowProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
func (s *Projects) DialogflowProjectsOperationsList(ctx context.Context, request operations.DialogflowProjectsOperationsListRequest) (*operations.DialogflowProjectsOperationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}/operations", request.PathParams)

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

	res := &operations.DialogflowProjectsOperationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningListOperationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningListOperationsResponse = out
		}
	}

	return res, nil
}
