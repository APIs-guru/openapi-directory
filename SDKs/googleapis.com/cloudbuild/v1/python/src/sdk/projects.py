import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def cloudbuild_projects_builds_cancel(self, request: operations.CloudbuildProjectsBuildsCancelRequest) -> operations.CloudbuildProjectsBuildsCancelResponse:
        r"""Cancels a build in progress.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/builds/{id}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsBuildsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out

        return res

    
    def cloudbuild_projects_builds_create(self, request: operations.CloudbuildProjectsBuildsCreateRequest) -> operations.CloudbuildProjectsBuildsCreateResponse:
        r"""Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/builds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsBuildsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_builds_get(self, request: operations.CloudbuildProjectsBuildsGetRequest) -> operations.CloudbuildProjectsBuildsGetResponse:
        r"""Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/builds/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsBuildsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out

        return res

    
    def cloudbuild_projects_builds_list(self, request: operations.CloudbuildProjectsBuildsListRequest) -> operations.CloudbuildProjectsBuildsListResponse:
        r"""Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/builds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsBuildsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBuildsResponse])
                res.list_builds_response = out

        return res

    
    def cloudbuild_projects_builds_retry(self, request: operations.CloudbuildProjectsBuildsRetryRequest) -> operations.CloudbuildProjectsBuildsRetryResponse:
        r"""Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/builds/{id}:retry", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsBuildsRetryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_bitbucket_server_configs_create(self, request: operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateRequest) -> operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateResponse:
        r"""Creates a new `BitbucketServerConfig`. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/bitbucketServerConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_bitbucket_server_configs_list(self, request: operations.CloudbuildProjectsLocationsBitbucketServerConfigsListRequest) -> operations.CloudbuildProjectsLocationsBitbucketServerConfigsListResponse:
        r"""List all `BitbucketServerConfigs` for a given project. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/bitbucketServerConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsBitbucketServerConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBitbucketServerConfigsResponse])
                res.list_bitbucket_server_configs_response = out

        return res

    
    def cloudbuild_projects_locations_bitbucket_server_configs_remove_bitbucket_server_connected_repository(self, request: operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryRequest) -> operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryResponse:
        r"""Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{config}:removeBitbucketServerConnectedRepository", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def cloudbuild_projects_locations_builds_approve(self, request: operations.CloudbuildProjectsLocationsBuildsApproveRequest) -> operations.CloudbuildProjectsLocationsBuildsApproveResponse:
        r"""Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:approve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsBuildsApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_builds_create(self, request: operations.CloudbuildProjectsLocationsBuildsCreateRequest) -> operations.CloudbuildProjectsLocationsBuildsCreateResponse:
        r"""Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/builds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsBuildsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_builds_list(self, request: operations.CloudbuildProjectsLocationsBuildsListRequest) -> operations.CloudbuildProjectsLocationsBuildsListResponse:
        r"""Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/builds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsBuildsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBuildsResponse])
                res.list_builds_response = out

        return res

    
    def cloudbuild_projects_locations_builds_retry(self, request: operations.CloudbuildProjectsLocationsBuildsRetryRequest) -> operations.CloudbuildProjectsLocationsBuildsRetryResponse:
        r"""Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:retry", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsBuildsRetryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_git_lab_configs_connected_repositories_batch_create(self, request: operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateRequest) -> operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateResponse:
        r"""Batch connecting GitLab repositories to Cloud Build. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/connectedRepositories:batchCreate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_git_lab_configs_create(self, request: operations.CloudbuildProjectsLocationsGitLabConfigsCreateRequest) -> operations.CloudbuildProjectsLocationsGitLabConfigsCreateResponse:
        r"""Creates a new `GitLabConfig`. This API is experimental
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/gitLabConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsGitLabConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_git_lab_configs_list(self, request: operations.CloudbuildProjectsLocationsGitLabConfigsListRequest) -> operations.CloudbuildProjectsLocationsGitLabConfigsListResponse:
        r"""List all `GitLabConfigs` for a given project. This API is experimental
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/gitLabConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsGitLabConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGitLabConfigsResponse])
                res.list_git_lab_configs_response = out

        return res

    
    def cloudbuild_projects_locations_git_lab_configs_remove_git_lab_connected_repository(self, request: operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryRequest) -> operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryResponse:
        r"""Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{config}:removeGitLabConnectedRepository", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def cloudbuild_projects_locations_git_lab_configs_repos_list(self, request: operations.CloudbuildProjectsLocationsGitLabConfigsReposListRequest) -> operations.CloudbuildProjectsLocationsGitLabConfigsReposListResponse:
        r"""List all repositories for a given `GitLabConfig`. This API is experimental
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/repos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsGitLabConfigsReposListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGitLabRepositoriesResponse])
                res.list_git_lab_repositories_response = out

        return res

    
    def cloudbuild_projects_locations_github_enterprise_configs_create(self, request: operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest) -> operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse:
        r"""Create an association between a GCP project and a GitHub Enterprise server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/githubEnterpriseConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_github_enterprise_configs_list(self, request: operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListRequest) -> operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListResponse:
        r"""List all GitHubEnterpriseConfigs for a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/githubEnterpriseConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGithubEnterpriseConfigsResponse])
                res.list_github_enterprise_configs_response = out

        return res

    
    def cloudbuild_projects_locations_operations_cancel(self, request: operations.CloudbuildProjectsLocationsOperationsCancelRequest) -> operations.CloudbuildProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def cloudbuild_projects_locations_triggers_create(self, request: operations.CloudbuildProjectsLocationsTriggersCreateRequest) -> operations.CloudbuildProjectsLocationsTriggersCreateResponse:
        r"""Creates a new `BuildTrigger`. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/triggers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildTrigger])
                res.build_trigger = out

        return res

    
    def cloudbuild_projects_locations_triggers_list(self, request: operations.CloudbuildProjectsLocationsTriggersListRequest) -> operations.CloudbuildProjectsLocationsTriggersListResponse:
        r"""Lists existing `BuildTrigger`s. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/triggers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBuildTriggersResponse])
                res.list_build_triggers_response = out

        return res

    
    def cloudbuild_projects_locations_triggers_patch(self, request: operations.CloudbuildProjectsLocationsTriggersPatchRequest) -> operations.CloudbuildProjectsLocationsTriggersPatchResponse:
        r"""Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsTriggersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildTrigger])
                res.build_trigger = out

        return res

    
    def cloudbuild_projects_locations_triggers_run(self, request: operations.CloudbuildProjectsLocationsTriggersRunRequest) -> operations.CloudbuildProjectsLocationsTriggersRunResponse:
        r"""Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:run", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsTriggersRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_triggers_webhook(self, request: operations.CloudbuildProjectsLocationsTriggersWebhookRequest) -> operations.CloudbuildProjectsLocationsTriggersWebhookResponse:
        r"""ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:webhook", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsTriggersWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.receive_trigger_webhook_response = out

        return res

    
    def cloudbuild_projects_locations_worker_pools_create(self, request: operations.CloudbuildProjectsLocationsWorkerPoolsCreateRequest) -> operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse:
        r"""Creates a `WorkerPool`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/workerPools", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_worker_pools_delete(self, request: operations.CloudbuildProjectsLocationsWorkerPoolsDeleteRequest) -> operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse:
        r"""Deletes a `WorkerPool`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_locations_worker_pools_get(self, request: operations.CloudbuildProjectsLocationsWorkerPoolsGetRequest) -> operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse:
        r"""Returns details of a `WorkerPool`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkerPool])
                res.worker_pool = out

        return res

    
    def cloudbuild_projects_locations_worker_pools_list(self, request: operations.CloudbuildProjectsLocationsWorkerPoolsListRequest) -> operations.CloudbuildProjectsLocationsWorkerPoolsListResponse:
        r"""Lists `WorkerPool`s.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/workerPools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsWorkerPoolsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListWorkerPoolsResponse])
                res.list_worker_pools_response = out

        return res

    
    def cloudbuild_projects_locations_worker_pools_patch(self, request: operations.CloudbuildProjectsLocationsWorkerPoolsPatchRequest) -> operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse:
        r"""Updates a `WorkerPool`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_triggers_create(self, request: operations.CloudbuildProjectsTriggersCreateRequest) -> operations.CloudbuildProjectsTriggersCreateResponse:
        r"""Creates a new `BuildTrigger`. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/triggers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildTrigger])
                res.build_trigger = out

        return res

    
    def cloudbuild_projects_triggers_delete(self, request: operations.CloudbuildProjectsTriggersDeleteRequest) -> operations.CloudbuildProjectsTriggersDeleteResponse:
        r"""Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/triggers/{triggerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsTriggersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def cloudbuild_projects_triggers_get(self, request: operations.CloudbuildProjectsTriggersGetRequest) -> operations.CloudbuildProjectsTriggersGetResponse:
        r"""Returns information about a `BuildTrigger`. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/triggers/{triggerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsTriggersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildTrigger])
                res.build_trigger = out

        return res

    
    def cloudbuild_projects_triggers_list(self, request: operations.CloudbuildProjectsTriggersListRequest) -> operations.CloudbuildProjectsTriggersListResponse:
        r"""Lists existing `BuildTrigger`s. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/triggers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBuildTriggersResponse])
                res.list_build_triggers_response = out

        return res

    
    def cloudbuild_projects_triggers_patch(self, request: operations.CloudbuildProjectsTriggersPatchRequest) -> operations.CloudbuildProjectsTriggersPatchResponse:
        r"""Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/triggers/{triggerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsTriggersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildTrigger])
                res.build_trigger = out

        return res

    
    def cloudbuild_projects_triggers_run(self, request: operations.CloudbuildProjectsTriggersRunRequest) -> operations.CloudbuildProjectsTriggersRunResponse:
        r"""Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/triggers/{triggerId}:run", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsTriggersRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudbuild_projects_triggers_webhook(self, request: operations.CloudbuildProjectsTriggersWebhookRequest) -> operations.CloudbuildProjectsTriggersWebhookResponse:
        r"""ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/triggers/{trigger}:webhook", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudbuildProjectsTriggersWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.receive_trigger_webhook_response = out

        return res

    