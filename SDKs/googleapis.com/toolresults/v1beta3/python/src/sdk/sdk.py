import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://toolresults.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def toolresults_projects_get_settings(self, request: operations.ToolresultsProjectsGetSettingsRequest) -> operations.ToolresultsProjectsGetSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsGetSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectSettings])
                res.project_settings = out

        return res

    
    
    def toolresults_projects_histories_create(self, request: operations.ToolresultsProjectsHistoriesCreateRequest) -> operations.ToolresultsProjectsHistoriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.History])
                res.history = out

        return res

    
    
    def toolresults_projects_histories_executions_clusters_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsClustersGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsClustersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsClustersGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScreenshotCluster])
                res.screenshot_cluster = out

        return res

    
    
    def toolresults_projects_histories_executions_clusters_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsClustersListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsClustersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsClustersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScreenshotClustersResponse])
                res.list_screenshot_clusters_response = out

        return res

    
    
    def toolresults_projects_histories_executions_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    
    def toolresults_projects_histories_executions_environments_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Environment])
                res.environment = out

        return res

    
    
    def toolresults_projects_histories_executions_environments_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnvironmentsResponse])
                res.list_environments_response = out

        return res

    
    
    def toolresults_projects_histories_executions_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    
    def toolresults_projects_histories_executions_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListExecutionsResponse])
                res.list_executions_response = out

        return res

    
    
    def toolresults_projects_histories_executions_patch(self, request: operations.ToolresultsProjectsHistoriesExecutionsPatchRequest) -> operations.ToolresultsProjectsHistoriesExecutionsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_accessibility_clusters(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/{name}:accessibilityClusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStepAccessibilityClustersResponse])
                res.list_step_accessibility_clusters_response = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_get_perf_metrics_summary(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfMetricsSummary])
                res.perf_metrics_summary = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStepsResponse])
                res.list_steps_response = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_patch(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPatchRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_perf_metrics_summary_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfMetricsSummary])
                res.perf_metrics_summary = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_perf_sample_series_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfSampleSeries])
                res.perf_sample_series = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_perf_sample_series_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PerfSampleSeries])
                res.perf_sample_series = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_perf_sample_series_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPerfSampleSeriesResponse])
                res.list_perf_sample_series_response = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_perf_sample_series_samples_batch_create(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCreatePerfSamplesResponse])
                res.batch_create_perf_samples_response = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_perf_sample_series_samples_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPerfSamplesResponse])
                res.list_perf_samples_response = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_publish_xunit_xml_files(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXMLFilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Step])
                res.step = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_test_cases_get(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestCase])
                res.test_case = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_test_cases_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTestCasesResponse])
                res.list_test_cases_response = out

        return res

    
    
    def toolresults_projects_histories_executions_steps_thumbnails_list(self, request: operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest) -> operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStepThumbnailsResponse])
                res.list_step_thumbnails_response = out

        return res

    
    
    def toolresults_projects_histories_get(self, request: operations.ToolresultsProjectsHistoriesGetRequest) -> operations.ToolresultsProjectsHistoriesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories/{historyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.History])
                res.history = out

        return res

    
    
    def toolresults_projects_histories_list(self, request: operations.ToolresultsProjectsHistoriesListRequest) -> operations.ToolresultsProjectsHistoriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}/histories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsHistoriesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHistoriesResponse])
                res.list_histories_response = out

        return res

    
    
    def toolresults_projects_initialize_settings(self, request: operations.ToolresultsProjectsInitializeSettingsRequest) -> operations.ToolresultsProjectsInitializeSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/toolresults/v1beta3/projects/{projectId}:initializeSettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ToolresultsProjectsInitializeSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectSettings])
                res.project_settings = out

        return res

    