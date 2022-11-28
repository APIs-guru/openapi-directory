import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Jobs:
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

    
    def youtubereporting_jobs_create(self, request: operations.YoutubereportingJobsCreateRequest) -> operations.YoutubereportingJobsCreateResponse:
        r"""Creates a job and returns it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/jobs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubereportingJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def youtubereporting_jobs_delete(self, request: operations.YoutubereportingJobsDeleteRequest) -> operations.YoutubereportingJobsDeleteResponse:
        r"""Deletes a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/jobs/{jobId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubereportingJobsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def youtubereporting_jobs_get(self, request: operations.YoutubereportingJobsGetRequest) -> operations.YoutubereportingJobsGetResponse:
        r"""Gets a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/jobs/{jobId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubereportingJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def youtubereporting_jobs_list(self, request: operations.YoutubereportingJobsListRequest) -> operations.YoutubereportingJobsListResponse:
        r"""Lists jobs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/jobs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubereportingJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    def youtubereporting_jobs_reports_get(self, request: operations.YoutubereportingJobsReportsGetRequest) -> operations.YoutubereportingJobsReportsGetResponse:
        r"""Gets the metadata of a specific report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/jobs/{jobId}/reports/{reportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubereportingJobsReportsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    
    def youtubereporting_jobs_reports_list(self, request: operations.YoutubereportingJobsReportsListRequest) -> operations.YoutubereportingJobsReportsListResponse:
        r"""Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/jobs/{jobId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubereportingJobsReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReportsResponse])
                res.list_reports_response = out

        return res

    