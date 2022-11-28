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

    
    def jobs_projects_client_events_create(self, request: operations.JobsProjectsClientEventsCreateRequest) -> operations.JobsProjectsClientEventsCreateResponse:
        r"""Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/clientEvents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsClientEventsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientEvent])
                res.client_event = out

        return res

    
    def jobs_projects_companies_create(self, request: operations.JobsProjectsCompaniesCreateRequest) -> operations.JobsProjectsCompaniesCreateResponse:
        r"""Creates a new company entity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/companies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsCompaniesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Company])
                res.company = out

        return res

    
    def jobs_projects_companies_list(self, request: operations.JobsProjectsCompaniesListRequest) -> operations.JobsProjectsCompaniesListResponse:
        r"""Lists all companies associated with the service account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/companies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsCompaniesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCompaniesResponse])
                res.list_companies_response = out

        return res

    
    def jobs_projects_complete(self, request: operations.JobsProjectsCompleteRequest) -> operations.JobsProjectsCompleteResponse:
        r"""Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:complete", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteQueryResponse])
                res.complete_query_response = out

        return res

    
    def jobs_projects_jobs_batch_delete(self, request: operations.JobsProjectsJobsBatchDeleteRequest) -> operations.JobsProjectsJobsBatchDeleteResponse:
        r"""Deletes a list of Jobs by filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/jobs:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def jobs_projects_jobs_create(self, request: operations.JobsProjectsJobsCreateRequest) -> operations.JobsProjectsJobsCreateResponse:
        r"""Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/jobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def jobs_projects_jobs_delete(self, request: operations.JobsProjectsJobsDeleteRequest) -> operations.JobsProjectsJobsDeleteResponse:
        r"""Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def jobs_projects_jobs_get(self, request: operations.JobsProjectsJobsGetRequest) -> operations.JobsProjectsJobsGetResponse:
        r"""Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def jobs_projects_jobs_list(self, request: operations.JobsProjectsJobsListRequest) -> operations.JobsProjectsJobsListResponse:
        r"""Lists jobs by filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    def jobs_projects_jobs_patch(self, request: operations.JobsProjectsJobsPatchRequest) -> operations.JobsProjectsJobsPatchResponse:
        r"""Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def jobs_projects_jobs_search(self, request: operations.JobsProjectsJobsSearchRequest) -> operations.JobsProjectsJobsSearchResponse:
        r"""Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/jobs:search", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchJobsResponse])
                res.search_jobs_response = out

        return res

    
    def jobs_projects_jobs_search_for_alert(self, request: operations.JobsProjectsJobsSearchForAlertRequest) -> operations.JobsProjectsJobsSearchForAlertResponse:
        r"""Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/jobs:searchForAlert", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsJobsSearchForAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchJobsResponse])
                res.search_jobs_response = out

        return res

    