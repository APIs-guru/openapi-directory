import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://dataflow.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def dataflow_projects_delete_snapshots(self, request: operations.DataflowProjectsDeleteSnapshotsRequest) -> operations.DataflowProjectsDeleteSnapshotsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsDeleteSnapshotsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_snapshot_response = out

        return res

    
    
    def dataflow_projects_jobs_aggregated(self, request: operations.DataflowProjectsJobsAggregatedRequest) -> operations.DataflowProjectsJobsAggregatedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs:aggregated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsAggregatedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    
    def dataflow_projects_jobs_create(self, request: operations.DataflowProjectsJobsCreateRequest) -> operations.DataflowProjectsJobsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_jobs_debug_get_config(self, request: operations.DataflowProjectsJobsDebugGetConfigRequest) -> operations.DataflowProjectsJobsDebugGetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsDebugGetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDebugConfigResponse])
                res.get_debug_config_response = out

        return res

    
    
    def dataflow_projects_jobs_debug_send_capture(self, request: operations.DataflowProjectsJobsDebugSendCaptureRequest) -> operations.DataflowProjectsJobsDebugSendCaptureResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsDebugSendCaptureResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.send_debug_capture_response = out

        return res

    
    
    def dataflow_projects_jobs_get(self, request: operations.DataflowProjectsJobsGetRequest) -> operations.DataflowProjectsJobsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_jobs_get_metrics(self, request: operations.DataflowProjectsJobsGetMetricsRequest) -> operations.DataflowProjectsJobsGetMetricsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsGetMetricsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobMetrics])
                res.job_metrics = out

        return res

    
    
    def dataflow_projects_jobs_list(self, request: operations.DataflowProjectsJobsListRequest) -> operations.DataflowProjectsJobsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    
    def dataflow_projects_jobs_messages_list(self, request: operations.DataflowProjectsJobsMessagesListRequest) -> operations.DataflowProjectsJobsMessagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsMessagesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobMessagesResponse])
                res.list_job_messages_response = out

        return res

    
    
    def dataflow_projects_jobs_snapshot(self, request: operations.DataflowProjectsJobsSnapshotRequest) -> operations.DataflowProjectsJobsSnapshotResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}:snapshot", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsSnapshotResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    
    def dataflow_projects_jobs_update(self, request: operations.DataflowProjectsJobsUpdateRequest) -> operations.DataflowProjectsJobsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_jobs_work_items_lease(self, request: operations.DataflowProjectsJobsWorkItemsLeaseRequest) -> operations.DataflowProjectsJobsWorkItemsLeaseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsWorkItemsLeaseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaseWorkItemResponse])
                res.lease_work_item_response = out

        return res

    
    
    def dataflow_projects_jobs_work_items_report_status(self, request: operations.DataflowProjectsJobsWorkItemsReportStatusRequest) -> operations.DataflowProjectsJobsWorkItemsReportStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsWorkItemsReportStatusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportWorkItemStatusResponse])
                res.report_work_item_status_response = out

        return res

    
    
    def dataflow_projects_locations_flex_templates_launch(self, request: operations.DataflowProjectsLocationsFlexTemplatesLaunchRequest) -> operations.DataflowProjectsLocationsFlexTemplatesLaunchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsFlexTemplatesLaunchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LaunchFlexTemplateResponse])
                res.launch_flex_template_response = out

        return res

    
    
    def dataflow_projects_locations_jobs_create(self, request: operations.DataflowProjectsLocationsJobsCreateRequest) -> operations.DataflowProjectsLocationsJobsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_locations_jobs_debug_get_config(self, request: operations.DataflowProjectsLocationsJobsDebugGetConfigRequest) -> operations.DataflowProjectsLocationsJobsDebugGetConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsDebugGetConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDebugConfigResponse])
                res.get_debug_config_response = out

        return res

    
    
    def dataflow_projects_locations_jobs_debug_send_capture(self, request: operations.DataflowProjectsLocationsJobsDebugSendCaptureRequest) -> operations.DataflowProjectsLocationsJobsDebugSendCaptureResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsDebugSendCaptureResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.send_debug_capture_response = out

        return res

    
    
    def dataflow_projects_locations_jobs_get(self, request: operations.DataflowProjectsLocationsJobsGetRequest) -> operations.DataflowProjectsLocationsJobsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_locations_jobs_get_execution_details(self, request: operations.DataflowProjectsLocationsJobsGetExecutionDetailsRequest) -> operations.DataflowProjectsLocationsJobsGetExecutionDetailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsGetExecutionDetailsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobExecutionDetails])
                res.job_execution_details = out

        return res

    
    
    def dataflow_projects_locations_jobs_get_metrics(self, request: operations.DataflowProjectsLocationsJobsGetMetricsRequest) -> operations.DataflowProjectsLocationsJobsGetMetricsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsGetMetricsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobMetrics])
                res.job_metrics = out

        return res

    
    
    def dataflow_projects_locations_jobs_list(self, request: operations.DataflowProjectsLocationsJobsListRequest) -> operations.DataflowProjectsLocationsJobsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    
    def dataflow_projects_locations_jobs_messages_list(self, request: operations.DataflowProjectsLocationsJobsMessagesListRequest) -> operations.DataflowProjectsLocationsJobsMessagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsMessagesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobMessagesResponse])
                res.list_job_messages_response = out

        return res

    
    
    def dataflow_projects_locations_jobs_snapshot(self, request: operations.DataflowProjectsLocationsJobsSnapshotRequest) -> operations.DataflowProjectsLocationsJobsSnapshotResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsSnapshotResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    
    def dataflow_projects_locations_jobs_snapshots_list(self, request: operations.DataflowProjectsLocationsJobsSnapshotsListRequest) -> operations.DataflowProjectsLocationsJobsSnapshotsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSnapshotsResponse])
                res.list_snapshots_response = out

        return res

    
    
    def dataflow_projects_locations_jobs_stages_get_execution_details(self, request: operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest) -> operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StageExecutionDetails])
                res.stage_execution_details = out

        return res

    
    
    def dataflow_projects_locations_jobs_update(self, request: operations.DataflowProjectsLocationsJobsUpdateRequest) -> operations.DataflowProjectsLocationsJobsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_locations_jobs_work_items_lease(self, request: operations.DataflowProjectsLocationsJobsWorkItemsLeaseRequest) -> operations.DataflowProjectsLocationsJobsWorkItemsLeaseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsWorkItemsLeaseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaseWorkItemResponse])
                res.lease_work_item_response = out

        return res

    
    
    def dataflow_projects_locations_jobs_work_items_report_status(self, request: operations.DataflowProjectsLocationsJobsWorkItemsReportStatusRequest) -> operations.DataflowProjectsLocationsJobsWorkItemsReportStatusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsWorkItemsReportStatusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportWorkItemStatusResponse])
                res.report_work_item_status_response = out

        return res

    
    
    def dataflow_projects_locations_snapshots_delete(self, request: operations.DataflowProjectsLocationsSnapshotsDeleteRequest) -> operations.DataflowProjectsLocationsSnapshotsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSnapshotsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_snapshot_response = out

        return res

    
    
    def dataflow_projects_locations_snapshots_get(self, request: operations.DataflowProjectsLocationsSnapshotsGetRequest) -> operations.DataflowProjectsLocationsSnapshotsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSnapshotsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    
    def dataflow_projects_locations_snapshots_list(self, request: operations.DataflowProjectsLocationsSnapshotsListRequest) -> operations.DataflowProjectsLocationsSnapshotsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSnapshotsResponse])
                res.list_snapshots_response = out

        return res

    
    
    def dataflow_projects_locations_sql_validate(self, request: operations.DataflowProjectsLocationsSQLValidateRequest) -> operations.DataflowProjectsLocationsSQLValidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/sql:validate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSQLValidateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidateResponse])
                res.validate_response = out

        return res

    
    
    def dataflow_projects_locations_templates_create(self, request: operations.DataflowProjectsLocationsTemplatesCreateRequest) -> operations.DataflowProjectsLocationsTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/templates", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_locations_templates_get(self, request: operations.DataflowProjectsLocationsTemplatesGetRequest) -> operations.DataflowProjectsLocationsTemplatesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/templates:get", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsTemplatesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTemplateResponse])
                res.get_template_response = out

        return res

    
    
    def dataflow_projects_locations_templates_launch(self, request: operations.DataflowProjectsLocationsTemplatesLaunchRequest) -> operations.DataflowProjectsLocationsTemplatesLaunchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/templates:launch", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsTemplatesLaunchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LaunchTemplateResponse])
                res.launch_template_response = out

        return res

    
    
    def dataflow_projects_locations_worker_messages(self, request: operations.DataflowProjectsLocationsWorkerMessagesRequest) -> operations.DataflowProjectsLocationsWorkerMessagesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/WorkerMessages", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsWorkerMessagesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendWorkerMessagesResponse])
                res.send_worker_messages_response = out

        return res

    
    
    def dataflow_projects_snapshots_get(self, request: operations.DataflowProjectsSnapshotsGetRequest) -> operations.DataflowProjectsSnapshotsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/snapshots/{snapshotId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsSnapshotsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    
    def dataflow_projects_snapshots_list(self, request: operations.DataflowProjectsSnapshotsListRequest) -> operations.DataflowProjectsSnapshotsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSnapshotsResponse])
                res.list_snapshots_response = out

        return res

    
    
    def dataflow_projects_templates_create(self, request: operations.DataflowProjectsTemplatesCreateRequest) -> operations.DataflowProjectsTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/templates", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    
    def dataflow_projects_templates_get(self, request: operations.DataflowProjectsTemplatesGetRequest) -> operations.DataflowProjectsTemplatesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/templates:get", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsTemplatesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTemplateResponse])
                res.get_template_response = out

        return res

    
    
    def dataflow_projects_templates_launch(self, request: operations.DataflowProjectsTemplatesLaunchRequest) -> operations.DataflowProjectsTemplatesLaunchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/templates:launch", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsTemplatesLaunchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LaunchTemplateResponse])
                res.launch_template_response = out

        return res

    
    
    def dataflow_projects_worker_messages(self, request: operations.DataflowProjectsWorkerMessagesRequest) -> operations.DataflowProjectsWorkerMessagesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/WorkerMessages", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsWorkerMessagesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendWorkerMessagesResponse])
                res.send_worker_messages_response = out

        return res

    