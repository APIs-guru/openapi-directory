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

    
    def toolresults_projects_get_settings(self, request: operations.ToolresultsProjectsGetSettingsRequest) -> operations.ToolresultsProjectsGetSettingsResponse:
        r"""Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsGetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectSettings])
                res.project_settings = out

        return res

    
    def toolresults_projects_histories_create(self, request: operations.ToolresultsProjectsHistoriesCreateRequest) -> operations.ToolresultsProjectsHistoriesCreateResponse:
        r"""Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.History])
                res.history = out

        return res

    
    def toolresults_projects_histories_executions_clusters_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsClustersGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsClustersGetResponse:
        r"""Retrieves a single screenshot cluster by its ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsClustersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScreenshotCluster])
                res.screenshot_cluster = out

        return res

    
    def toolresults_projects_histories_executions_clusters_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsClustersListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsClustersListResponse:
        r"""Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsClustersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScreenshotClustersResponse])
                res.list_screenshot_clusters_response = out

        return res

    
    def toolresults_projects_histories_executions_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsCreateResponse:
        r"""Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def toolresults_projects_histories_executions_environments_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse:
        r"""Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    def toolresults_projects_histories_executions_environments_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse:
        r"""Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnvironmentsResponse])
                res.list_environments_response = out

        return res

    
    def toolresults_projects_histories_executions_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsGetResponse:
        r"""Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def toolresults_projects_histories_executions_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsListResponse:
        r"""Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListExecutionsResponse])
                res.list_executions_response = out

        return res

    
    def toolresults_projects_histories_executions_patch(self, request: operations.ToolresultsProjectsHistoriesExecutionsPatchRequest) -> operations.ToolresultsProjectsHistoriesExecutionsPatchResponse:
        r"""Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def toolresults_projects_histories_executions_steps_accessibility_clusters(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse:
        r"""Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/{name}:accessibilityClusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStepAccessibilityClustersResponse])
                res.list_step_accessibility_clusters_response = out

        return res

    
    def toolresults_projects_histories_executions_steps_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsCreateResponse:
        r"""Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    def toolresults_projects_histories_executions_steps_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsGetResponse:
        r"""Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    def toolresults_projects_histories_executions_steps_get_perf_metrics_summary(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse:
        r"""Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfMetricsSummary])
                res.perf_metrics_summary = out

        return res

    
    def toolresults_projects_histories_executions_steps_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsListResponse:
        r"""Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStepsResponse])
                res.list_steps_response = out

        return res

    
    def toolresults_projects_histories_executions_steps_patch(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPatchRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPatchResponse:
        r"""Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    def toolresults_projects_histories_executions_steps_perf_metrics_summary_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse:
        r"""Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfMetricsSummary])
                res.perf_metrics_summary = out

        return res

    
    def toolresults_projects_histories_executions_steps_perf_sample_series_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse:
        r"""Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfSampleSeries])
                res.perf_sample_series = out

        return res

    
    def toolresults_projects_histories_executions_steps_perf_sample_series_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse:
        r"""Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfSampleSeries])
                res.perf_sample_series = out

        return res

    
    def toolresults_projects_histories_executions_steps_perf_sample_series_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse:
        r"""Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPerfSampleSeriesResponse])
                res.list_perf_sample_series_response = out

        return res

    
    def toolresults_projects_histories_executions_steps_perf_sample_series_samples_batch_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse:
        r"""Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCreatePerfSamplesResponse])
                res.batch_create_perf_samples_response = out

        return res

    
    def toolresults_projects_histories_executions_steps_perf_sample_series_samples_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse:
        r"""Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPerfSamplesResponse])
                res.list_perf_samples_response = out

        return res

    
    def toolresults_projects_histories_executions_steps_publish_xunit_xml_files(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesResponse:
        r"""Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    def toolresults_projects_histories_executions_steps_test_cases_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse:
        r"""Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestCase])
                res.test_case = out

        return res

    
    def toolresults_projects_histories_executions_steps_test_cases_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse:
        r"""Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTestCasesResponse])
                res.list_test_cases_response = out

        return res

    
    def toolresults_projects_histories_executions_steps_thumbnails_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse:
        r"""Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStepThumbnailsResponse])
                res.list_step_thumbnails_response = out

        return res

    
    def toolresults_projects_histories_get(self, request: operations.ToolresultsProjectsHistoriesGetRequest) -> operations.ToolresultsProjectsHistoriesGetResponse:
        r"""Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.History])
                res.history = out

        return res

    
    def toolresults_projects_histories_list(self, request: operations.ToolresultsProjectsHistoriesListRequest) -> operations.ToolresultsProjectsHistoriesListResponse:
        r"""Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHistoriesResponse])
                res.list_histories_response = out

        return res

    
    def toolresults_projects_initialize_settings(self, request: operations.ToolresultsProjectsInitializeSettingsRequest) -> operations.ToolresultsProjectsInitializeSettingsResponse:
        r"""Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}:initializeSettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsInitializeSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectSettings])
                res.project_settings = out

        return res

    