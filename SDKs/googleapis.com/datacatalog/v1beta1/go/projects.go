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

// DatacatalogProjectsLocationsEntryGroupsCreate - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
func (s *Projects) DatacatalogProjectsLocationsEntryGroupsCreate(ctx context.Context, request operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest) (*operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/entryGroups", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1EntryGroup
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1EntryGroup = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsEntryGroupsEntriesCreate - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
func (s *Projects) DatacatalogProjectsLocationsEntryGroupsEntriesCreate(ctx context.Context, request operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest) (*operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/entries", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1Entry
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1Entry = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsEntryGroupsEntriesList - Lists entries.
func (s *Projects) DatacatalogProjectsLocationsEntryGroupsEntriesList(ctx context.Context, request operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest) (*operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/entries", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1ListEntriesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1ListEntriesResponse = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsEntryGroupsList - Lists entry groups.
func (s *Projects) DatacatalogProjectsLocationsEntryGroupsList(ctx context.Context, request operations.DatacatalogProjectsLocationsEntryGroupsListRequest) (*operations.DatacatalogProjectsLocationsEntryGroupsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/entryGroups", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsEntryGroupsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsEntryGroupsTagsCreate - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
func (s *Projects) DatacatalogProjectsLocationsEntryGroupsTagsCreate(ctx context.Context, request operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest) (*operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/tags", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1Tag
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1Tag = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsEntryGroupsTagsList - Lists tags assigned to an Entry. The columns in the response are lowercased.
func (s *Projects) DatacatalogProjectsLocationsEntryGroupsTagsList(ctx context.Context, request operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest) (*operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/tags", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1ListTagsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1ListTagsResponse = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTagTemplatesCreate - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
func (s *Projects) DatacatalogProjectsLocationsTagTemplatesCreate(ctx context.Context, request operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest) (*operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/tagTemplates", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1TagTemplate
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1TagTemplate = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTagTemplatesFieldsCreate - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
func (s *Projects) DatacatalogProjectsLocationsTagTemplatesFieldsCreate(ctx context.Context, request operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest) (*operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/fields", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1TagTemplateField
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1TagTemplateField = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
func (s *Projects) DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(ctx context.Context, request operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest) (*operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}:rename", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1TagTemplateField
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1TagTemplateField = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesCreate - Creates a taxonomy in the specified project.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesCreate(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/taxonomies", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1Taxonomy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1Taxonomy = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesExport - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesExport(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesExportRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesExportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/taxonomies:export", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesExportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesImport - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesImport(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesImportRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/taxonomies:import", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesList - Lists all taxonomies in a project in a particular location that the caller has permission to view.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesList(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesListRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/taxonomies", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate - Creates a policy tag in the specified taxonomy.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/policyTags", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1PolicyTag
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1PolicyTag = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete - Deletes a policy tag. Also deletes all of its descendant policy tags.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet - Gets a policy tag.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1PolicyTag
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1PolicyTag = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy - Gets the IAM policy for a taxonomy or a policy tag.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{resource}:getIamPolicy", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Policy = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsList - Lists all policy tags in a taxonomy.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsList(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/policyTags", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch - Updates a policy tag.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{name}", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudDatacatalogV1beta1PolicyTag
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudDatacatalogV1beta1PolicyTag = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy - Sets the IAM policy for a taxonomy or a policy tag.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{resource}:setIamPolicy", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Policy = out
		}
	}

	return res, nil
}

// DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions - Returns the permissions that a caller has on the specified taxonomy or policy tag.
func (s *Projects) DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(ctx context.Context, request operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest) (*operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{resource}:testIamPermissions", request.PathParams)

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

	res := &operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TestIamPermissionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TestIamPermissionsResponse = out
		}
	}

	return res, nil
}
