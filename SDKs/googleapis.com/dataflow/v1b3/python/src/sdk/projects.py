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

    
    def dataflow_projects_delete_snapshots(self, request: operations.DataflowProjectsDeleteSnapshotsRequest) -> operations.DataflowProjectsDeleteSnapshotsResponse:
        r"""Deletes a snapshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsDeleteSnapshotsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_snapshot_response = out

        return res

    
    def dataflow_projects_jobs_aggregated(self, request: operations.DataflowProjectsJobsAggregatedRequest) -> operations.DataflowProjectsJobsAggregatedResponse:
        r"""List the jobs of a project across all regions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs:aggregated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsAggregatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    def dataflow_projects_jobs_create(self, request: operations.DataflowProjectsJobsCreateRequest) -> operations.DataflowProjectsJobsCreateResponse:
        r"""Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_jobs_debug_get_config(self, request: operations.DataflowProjectsJobsDebugGetConfigRequest) -> operations.DataflowProjectsJobsDebugGetConfigResponse:
        r"""Get encoded debug configuration for component. Not cacheable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsDebugGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDebugConfigResponse])
                res.get_debug_config_response = out

        return res

    
    def dataflow_projects_jobs_debug_send_capture(self, request: operations.DataflowProjectsJobsDebugSendCaptureRequest) -> operations.DataflowProjectsJobsDebugSendCaptureResponse:
        r"""Send encoded debug capture data for component.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsDebugSendCaptureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.send_debug_capture_response = out

        return res

    
    def dataflow_projects_jobs_get(self, request: operations.DataflowProjectsJobsGetRequest) -> operations.DataflowProjectsJobsGetResponse:
        r"""Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_jobs_get_metrics(self, request: operations.DataflowProjectsJobsGetMetricsRequest) -> operations.DataflowProjectsJobsGetMetricsResponse:
        r"""Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsGetMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobMetrics])
                res.job_metrics = out

        return res

    
    def dataflow_projects_jobs_list(self, request: operations.DataflowProjectsJobsListRequest) -> operations.DataflowProjectsJobsListResponse:
        r"""List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    def dataflow_projects_jobs_messages_list(self, request: operations.DataflowProjectsJobsMessagesListRequest) -> operations.DataflowProjectsJobsMessagesListResponse:
        r"""Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsMessagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobMessagesResponse])
                res.list_job_messages_response = out

        return res

    
    def dataflow_projects_jobs_snapshot(self, request: operations.DataflowProjectsJobsSnapshotRequest) -> operations.DataflowProjectsJobsSnapshotResponse:
        r"""Snapshot the state of a streaming job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}:snapshot", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    def dataflow_projects_jobs_update(self, request: operations.DataflowProjectsJobsUpdateRequest) -> operations.DataflowProjectsJobsUpdateResponse:
        r"""Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_jobs_work_items_lease(self, request: operations.DataflowProjectsJobsWorkItemsLeaseRequest) -> operations.DataflowProjectsJobsWorkItemsLeaseResponse:
        r"""Leases a dataflow WorkItem to run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsWorkItemsLeaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaseWorkItemResponse])
                res.lease_work_item_response = out

        return res

    
    def dataflow_projects_jobs_work_items_report_status(self, request: operations.DataflowProjectsJobsWorkItemsReportStatusRequest) -> operations.DataflowProjectsJobsWorkItemsReportStatusResponse:
        r"""Reports the status of dataflow WorkItems leased by a worker.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsJobsWorkItemsReportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportWorkItemStatusResponse])
                res.report_work_item_status_response = out

        return res

    
    def dataflow_projects_locations_flex_templates_launch(self, request: operations.DataflowProjectsLocationsFlexTemplatesLaunchRequest) -> operations.DataflowProjectsLocationsFlexTemplatesLaunchResponse:
        r"""Launch a job with a FlexTemplate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsFlexTemplatesLaunchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LaunchFlexTemplateResponse])
                res.launch_flex_template_response = out

        return res

    
    def dataflow_projects_locations_jobs_create(self, request: operations.DataflowProjectsLocationsJobsCreateRequest) -> operations.DataflowProjectsLocationsJobsCreateResponse:
        r"""Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_locations_jobs_debug_get_config(self, request: operations.DataflowProjectsLocationsJobsDebugGetConfigRequest) -> operations.DataflowProjectsLocationsJobsDebugGetConfigResponse:
        r"""Get encoded debug configuration for component. Not cacheable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsDebugGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDebugConfigResponse])
                res.get_debug_config_response = out

        return res

    
    def dataflow_projects_locations_jobs_debug_send_capture(self, request: operations.DataflowProjectsLocationsJobsDebugSendCaptureRequest) -> operations.DataflowProjectsLocationsJobsDebugSendCaptureResponse:
        r"""Send encoded debug capture data for component.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsDebugSendCaptureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.send_debug_capture_response = out

        return res

    
    def dataflow_projects_locations_jobs_get(self, request: operations.DataflowProjectsLocationsJobsGetRequest) -> operations.DataflowProjectsLocationsJobsGetResponse:
        r"""Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_locations_jobs_get_execution_details(self, request: operations.DataflowProjectsLocationsJobsGetExecutionDetailsRequest) -> operations.DataflowProjectsLocationsJobsGetExecutionDetailsResponse:
        r"""Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsGetExecutionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobExecutionDetails])
                res.job_execution_details = out

        return res

    
    def dataflow_projects_locations_jobs_get_metrics(self, request: operations.DataflowProjectsLocationsJobsGetMetricsRequest) -> operations.DataflowProjectsLocationsJobsGetMetricsResponse:
        r"""Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsGetMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JobMetrics])
                res.job_metrics = out

        return res

    
    def dataflow_projects_locations_jobs_list(self, request: operations.DataflowProjectsLocationsJobsListRequest) -> operations.DataflowProjectsLocationsJobsListResponse:
        r"""List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    def dataflow_projects_locations_jobs_messages_list(self, request: operations.DataflowProjectsLocationsJobsMessagesListRequest) -> operations.DataflowProjectsLocationsJobsMessagesListResponse:
        r"""Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsMessagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobMessagesResponse])
                res.list_job_messages_response = out

        return res

    
    def dataflow_projects_locations_jobs_snapshot(self, request: operations.DataflowProjectsLocationsJobsSnapshotRequest) -> operations.DataflowProjectsLocationsJobsSnapshotResponse:
        r"""Snapshot the state of a streaming job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    def dataflow_projects_locations_jobs_snapshots_list(self, request: operations.DataflowProjectsLocationsJobsSnapshotsListRequest) -> operations.DataflowProjectsLocationsJobsSnapshotsListResponse:
        r"""Lists snapshots.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSnapshotsResponse])
                res.list_snapshots_response = out

        return res

    
    def dataflow_projects_locations_jobs_stages_get_execution_details(self, request: operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest) -> operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse:
        r"""Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StageExecutionDetails])
                res.stage_execution_details = out

        return res

    
    def dataflow_projects_locations_jobs_update(self, request: operations.DataflowProjectsLocationsJobsUpdateRequest) -> operations.DataflowProjectsLocationsJobsUpdateResponse:
        r"""Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_locations_jobs_work_items_lease(self, request: operations.DataflowProjectsLocationsJobsWorkItemsLeaseRequest) -> operations.DataflowProjectsLocationsJobsWorkItemsLeaseResponse:
        r"""Leases a dataflow WorkItem to run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsWorkItemsLeaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaseWorkItemResponse])
                res.lease_work_item_response = out

        return res

    
    def dataflow_projects_locations_jobs_work_items_report_status(self, request: operations.DataflowProjectsLocationsJobsWorkItemsReportStatusRequest) -> operations.DataflowProjectsLocationsJobsWorkItemsReportStatusResponse:
        r"""Reports the status of dataflow WorkItems leased by a worker.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsJobsWorkItemsReportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportWorkItemStatusResponse])
                res.report_work_item_status_response = out

        return res

    
    def dataflow_projects_locations_snapshots_delete(self, request: operations.DataflowProjectsLocationsSnapshotsDeleteRequest) -> operations.DataflowProjectsLocationsSnapshotsDeleteResponse:
        r"""Deletes a snapshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSnapshotsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_snapshot_response = out

        return res

    
    def dataflow_projects_locations_snapshots_get(self, request: operations.DataflowProjectsLocationsSnapshotsGetRequest) -> operations.DataflowProjectsLocationsSnapshotsGetResponse:
        r"""Gets information about a snapshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSnapshotsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    def dataflow_projects_locations_snapshots_list(self, request: operations.DataflowProjectsLocationsSnapshotsListRequest) -> operations.DataflowProjectsLocationsSnapshotsListResponse:
        r"""Lists snapshots.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSnapshotsResponse])
                res.list_snapshots_response = out

        return res

    
    def dataflow_projects_locations_sql_validate(self, request: operations.DataflowProjectsLocationsSQLValidateRequest) -> operations.DataflowProjectsLocationsSQLValidateResponse:
        r"""Validates a GoogleSQL query for Cloud Dataflow syntax. Will always confirm the given query parses correctly, and if able to look up schema information from DataCatalog, will validate that the query analyzes properly as well.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/sql:validate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsSQLValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidateResponse])
                res.validate_response = out

        return res

    
    def dataflow_projects_locations_templates_create(self, request: operations.DataflowProjectsLocationsTemplatesCreateRequest) -> operations.DataflowProjectsLocationsTemplatesCreateResponse:
        r"""Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/templates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_locations_templates_get(self, request: operations.DataflowProjectsLocationsTemplatesGetRequest) -> operations.DataflowProjectsLocationsTemplatesGetResponse:
        r"""Get the template associated with a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/templates:get", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsTemplatesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTemplateResponse])
                res.get_template_response = out

        return res

    
    def dataflow_projects_locations_templates_launch(self, request: operations.DataflowProjectsLocationsTemplatesLaunchRequest) -> operations.DataflowProjectsLocationsTemplatesLaunchResponse:
        r"""Launch a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/templates:launch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsTemplatesLaunchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LaunchTemplateResponse])
                res.launch_template_response = out

        return res

    
    def dataflow_projects_locations_worker_messages(self, request: operations.DataflowProjectsLocationsWorkerMessagesRequest) -> operations.DataflowProjectsLocationsWorkerMessagesResponse:
        r"""Send a worker_message to the service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/locations/{location}/WorkerMessages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsLocationsWorkerMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendWorkerMessagesResponse])
                res.send_worker_messages_response = out

        return res

    
    def dataflow_projects_snapshots_get(self, request: operations.DataflowProjectsSnapshotsGetRequest) -> operations.DataflowProjectsSnapshotsGetResponse:
        r"""Gets information about a snapshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/snapshots/{snapshotId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsSnapshotsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    def dataflow_projects_snapshots_list(self, request: operations.DataflowProjectsSnapshotsListRequest) -> operations.DataflowProjectsSnapshotsListResponse:
        r"""Lists snapshots.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSnapshotsResponse])
                res.list_snapshots_response = out

        return res

    
    def dataflow_projects_templates_create(self, request: operations.DataflowProjectsTemplatesCreateRequest) -> operations.DataflowProjectsTemplatesCreateResponse:
        r"""Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/templates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def dataflow_projects_templates_get(self, request: operations.DataflowProjectsTemplatesGetRequest) -> operations.DataflowProjectsTemplatesGetResponse:
        r"""Get the template associated with a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/templates:get", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsTemplatesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTemplateResponse])
                res.get_template_response = out

        return res

    
    def dataflow_projects_templates_launch(self, request: operations.DataflowProjectsTemplatesLaunchRequest) -> operations.DataflowProjectsTemplatesLaunchResponse:
        r"""Launch a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/templates:launch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsTemplatesLaunchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LaunchTemplateResponse])
                res.launch_template_response = out

        return res

    
    def dataflow_projects_worker_messages(self, request: operations.DataflowProjectsWorkerMessagesRequest) -> operations.DataflowProjectsWorkerMessagesResponse:
        r"""Send a worker_message to the service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1b3/projects/{projectId}/WorkerMessages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataflowProjectsWorkerMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendWorkerMessagesResponse])
                res.send_worker_messages_response = out

        return res

    