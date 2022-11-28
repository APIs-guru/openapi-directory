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

// CloudbuildProjectsBuildsCancel - Cancels a build in progress.
func (s *Projects) CloudbuildProjectsBuildsCancel(ctx context.Context, request operations.CloudbuildProjectsBuildsCancelRequest) (*operations.CloudbuildProjectsBuildsCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/builds/{id}:cancel", request.PathParams)

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

	res := &operations.CloudbuildProjectsBuildsCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Build
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Build = out
		}
	}

	return res, nil
}

// CloudbuildProjectsBuildsCreate - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
func (s *Projects) CloudbuildProjectsBuildsCreate(ctx context.Context, request operations.CloudbuildProjectsBuildsCreateRequest) (*operations.CloudbuildProjectsBuildsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/builds", request.PathParams)

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

	res := &operations.CloudbuildProjectsBuildsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsBuildsGet - Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
func (s *Projects) CloudbuildProjectsBuildsGet(ctx context.Context, request operations.CloudbuildProjectsBuildsGetRequest) (*operations.CloudbuildProjectsBuildsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/builds/{id}", request.PathParams)

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

	res := &operations.CloudbuildProjectsBuildsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Build
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Build = out
		}
	}

	return res, nil
}

// CloudbuildProjectsBuildsList - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
func (s *Projects) CloudbuildProjectsBuildsList(ctx context.Context, request operations.CloudbuildProjectsBuildsListRequest) (*operations.CloudbuildProjectsBuildsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/builds", request.PathParams)

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

	res := &operations.CloudbuildProjectsBuildsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBuildsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBuildsResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsBuildsRetry - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
func (s *Projects) CloudbuildProjectsBuildsRetry(ctx context.Context, request operations.CloudbuildProjectsBuildsRetryRequest) (*operations.CloudbuildProjectsBuildsRetryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/builds/{id}:retry", request.PathParams)

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

	res := &operations.CloudbuildProjectsBuildsRetryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsBitbucketServerConfigsCreate - Creates a new `BitbucketServerConfig`. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsBitbucketServerConfigsCreate(ctx context.Context, request operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateRequest) (*operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/bitbucketServerConfigs", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsBitbucketServerConfigsList - List all `BitbucketServerConfigs` for a given project. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsBitbucketServerConfigsList(ctx context.Context, request operations.CloudbuildProjectsLocationsBitbucketServerConfigsListRequest) (*operations.CloudbuildProjectsLocationsBitbucketServerConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/bitbucketServerConfigs", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsBitbucketServerConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBitbucketServerConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBitbucketServerConfigsResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepository - Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepository(ctx context.Context, request operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryRequest) (*operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{config}:removeBitbucketServerConnectedRepository", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryResponse{
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

// CloudbuildProjectsLocationsBuildsApprove - Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
func (s *Projects) CloudbuildProjectsLocationsBuildsApprove(ctx context.Context, request operations.CloudbuildProjectsLocationsBuildsApproveRequest) (*operations.CloudbuildProjectsLocationsBuildsApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:approve", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsBuildsApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsBuildsCreate - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
func (s *Projects) CloudbuildProjectsLocationsBuildsCreate(ctx context.Context, request operations.CloudbuildProjectsLocationsBuildsCreateRequest) (*operations.CloudbuildProjectsLocationsBuildsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/builds", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsBuildsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsBuildsList - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
func (s *Projects) CloudbuildProjectsLocationsBuildsList(ctx context.Context, request operations.CloudbuildProjectsLocationsBuildsListRequest) (*operations.CloudbuildProjectsLocationsBuildsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/builds", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsBuildsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBuildsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBuildsResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsBuildsRetry - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
func (s *Projects) CloudbuildProjectsLocationsBuildsRetry(ctx context.Context, request operations.CloudbuildProjectsLocationsBuildsRetryRequest) (*operations.CloudbuildProjectsLocationsBuildsRetryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:retry", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsBuildsRetryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreate - Batch connecting GitLab repositories to Cloud Build. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreate(ctx context.Context, request operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateRequest) (*operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/connectedRepositories:batchCreate", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsGitLabConfigsCreate - Creates a new `GitLabConfig`. This API is experimental
func (s *Projects) CloudbuildProjectsLocationsGitLabConfigsCreate(ctx context.Context, request operations.CloudbuildProjectsLocationsGitLabConfigsCreateRequest) (*operations.CloudbuildProjectsLocationsGitLabConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/gitLabConfigs", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsGitLabConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsGitLabConfigsList - List all `GitLabConfigs` for a given project. This API is experimental
func (s *Projects) CloudbuildProjectsLocationsGitLabConfigsList(ctx context.Context, request operations.CloudbuildProjectsLocationsGitLabConfigsListRequest) (*operations.CloudbuildProjectsLocationsGitLabConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/gitLabConfigs", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsGitLabConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListGitLabConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListGitLabConfigsResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepository - Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepository(ctx context.Context, request operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryRequest) (*operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{config}:removeGitLabConnectedRepository", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryResponse{
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

// CloudbuildProjectsLocationsGitLabConfigsReposList - List all repositories for a given `GitLabConfig`. This API is experimental
func (s *Projects) CloudbuildProjectsLocationsGitLabConfigsReposList(ctx context.Context, request operations.CloudbuildProjectsLocationsGitLabConfigsReposListRequest) (*operations.CloudbuildProjectsLocationsGitLabConfigsReposListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/repos", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsGitLabConfigsReposListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListGitLabRepositoriesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListGitLabRepositoriesResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsGithubEnterpriseConfigsCreate - Create an association between a GCP project and a GitHub Enterprise server.
func (s *Projects) CloudbuildProjectsLocationsGithubEnterpriseConfigsCreate(ctx context.Context, request operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest) (*operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/githubEnterpriseConfigs", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsGithubEnterpriseConfigsList - List all GitHubEnterpriseConfigs for a given project.
func (s *Projects) CloudbuildProjectsLocationsGithubEnterpriseConfigsList(ctx context.Context, request operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListRequest) (*operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/githubEnterpriseConfigs", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListGithubEnterpriseConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListGithubEnterpriseConfigsResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
func (s *Projects) CloudbuildProjectsLocationsOperationsCancel(ctx context.Context, request operations.CloudbuildProjectsLocationsOperationsCancelRequest) (*operations.CloudbuildProjectsLocationsOperationsCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:cancel", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsOperationsCancelResponse{
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

// CloudbuildProjectsLocationsTriggersCreate - Creates a new `BuildTrigger`. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsTriggersCreate(ctx context.Context, request operations.CloudbuildProjectsLocationsTriggersCreateRequest) (*operations.CloudbuildProjectsLocationsTriggersCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/triggers", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsTriggersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BuildTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BuildTrigger = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsTriggersList - Lists existing `BuildTrigger`s. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsTriggersList(ctx context.Context, request operations.CloudbuildProjectsLocationsTriggersListRequest) (*operations.CloudbuildProjectsLocationsTriggersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/triggers", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsTriggersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBuildTriggersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBuildTriggersResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsTriggersPatch - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
func (s *Projects) CloudbuildProjectsLocationsTriggersPatch(ctx context.Context, request operations.CloudbuildProjectsLocationsTriggersPatchRequest) (*operations.CloudbuildProjectsLocationsTriggersPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{resourceName}", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsTriggersPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BuildTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BuildTrigger = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsTriggersRun - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
func (s *Projects) CloudbuildProjectsLocationsTriggersRun(ctx context.Context, request operations.CloudbuildProjectsLocationsTriggersRunRequest) (*operations.CloudbuildProjectsLocationsTriggersRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:run", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsTriggersRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsTriggersWebhook - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
func (s *Projects) CloudbuildProjectsLocationsTriggersWebhook(ctx context.Context, request operations.CloudbuildProjectsLocationsTriggersWebhookRequest) (*operations.CloudbuildProjectsLocationsTriggersWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:webhook", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsTriggersWebhookResponse{
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

			res.ReceiveTriggerWebhookResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsWorkerPoolsCreate - Creates a `WorkerPool`.
func (s *Projects) CloudbuildProjectsLocationsWorkerPoolsCreate(ctx context.Context, request operations.CloudbuildProjectsLocationsWorkerPoolsCreateRequest) (*operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/workerPools", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsWorkerPoolsDelete - Deletes a `WorkerPool`.
func (s *Projects) CloudbuildProjectsLocationsWorkerPoolsDelete(ctx context.Context, request operations.CloudbuildProjectsLocationsWorkerPoolsDeleteRequest) (*operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsWorkerPoolsGet - Returns details of a `WorkerPool`.
func (s *Projects) CloudbuildProjectsLocationsWorkerPoolsGet(ctx context.Context, request operations.CloudbuildProjectsLocationsWorkerPoolsGetRequest) (*operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse, error) {
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

	res := &operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.WorkerPool
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WorkerPool = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsWorkerPoolsList - Lists `WorkerPool`s.
func (s *Projects) CloudbuildProjectsLocationsWorkerPoolsList(ctx context.Context, request operations.CloudbuildProjectsLocationsWorkerPoolsListRequest) (*operations.CloudbuildProjectsLocationsWorkerPoolsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/workerPools", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsWorkerPoolsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListWorkerPoolsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListWorkerPoolsResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsLocationsWorkerPoolsPatch - Updates a `WorkerPool`.
func (s *Projects) CloudbuildProjectsLocationsWorkerPoolsPatch(ctx context.Context, request operations.CloudbuildProjectsLocationsWorkerPoolsPatchRequest) (*operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsTriggersCreate - Creates a new `BuildTrigger`. This API is experimental.
func (s *Projects) CloudbuildProjectsTriggersCreate(ctx context.Context, request operations.CloudbuildProjectsTriggersCreateRequest) (*operations.CloudbuildProjectsTriggersCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/triggers", request.PathParams)

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

	res := &operations.CloudbuildProjectsTriggersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BuildTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BuildTrigger = out
		}
	}

	return res, nil
}

// CloudbuildProjectsTriggersDelete - Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
func (s *Projects) CloudbuildProjectsTriggersDelete(ctx context.Context, request operations.CloudbuildProjectsTriggersDeleteRequest) (*operations.CloudbuildProjectsTriggersDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/triggers/{triggerId}", request.PathParams)

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

	res := &operations.CloudbuildProjectsTriggersDeleteResponse{
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

// CloudbuildProjectsTriggersGet - Returns information about a `BuildTrigger`. This API is experimental.
func (s *Projects) CloudbuildProjectsTriggersGet(ctx context.Context, request operations.CloudbuildProjectsTriggersGetRequest) (*operations.CloudbuildProjectsTriggersGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/triggers/{triggerId}", request.PathParams)

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

	res := &operations.CloudbuildProjectsTriggersGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BuildTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BuildTrigger = out
		}
	}

	return res, nil
}

// CloudbuildProjectsTriggersList - Lists existing `BuildTrigger`s. This API is experimental.
func (s *Projects) CloudbuildProjectsTriggersList(ctx context.Context, request operations.CloudbuildProjectsTriggersListRequest) (*operations.CloudbuildProjectsTriggersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/triggers", request.PathParams)

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

	res := &operations.CloudbuildProjectsTriggersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBuildTriggersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBuildTriggersResponse = out
		}
	}

	return res, nil
}

// CloudbuildProjectsTriggersPatch - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
func (s *Projects) CloudbuildProjectsTriggersPatch(ctx context.Context, request operations.CloudbuildProjectsTriggersPatchRequest) (*operations.CloudbuildProjectsTriggersPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/triggers/{triggerId}", request.PathParams)

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

	res := &operations.CloudbuildProjectsTriggersPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BuildTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BuildTrigger = out
		}
	}

	return res, nil
}

// CloudbuildProjectsTriggersRun - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
func (s *Projects) CloudbuildProjectsTriggersRun(ctx context.Context, request operations.CloudbuildProjectsTriggersRunRequest) (*operations.CloudbuildProjectsTriggersRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/triggers/{triggerId}:run", request.PathParams)

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

	res := &operations.CloudbuildProjectsTriggersRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudbuildProjectsTriggersWebhook - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
func (s *Projects) CloudbuildProjectsTriggersWebhook(ctx context.Context, request operations.CloudbuildProjectsTriggersWebhookRequest) (*operations.CloudbuildProjectsTriggersWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/projects/{projectId}/triggers/{trigger}:webhook", request.PathParams)

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

	res := &operations.CloudbuildProjectsTriggersWebhookResponse{
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

			res.ReceiveTriggerWebhookResponse = out
		}
	}

	return res, nil
}
