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

    
    def jobs_projects_tenants_client_events_create(self, request: operations.JobsProjectsTenantsClientEventsCreateRequest) -> operations.JobsProjectsTenantsClientEventsCreateResponse:
        r"""Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/clientEvents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsClientEventsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientEvent])
                res.client_event = out

        return res

    
    def jobs_projects_tenants_companies_create(self, request: operations.JobsProjectsTenantsCompaniesCreateRequest) -> operations.JobsProjectsTenantsCompaniesCreateResponse:
        r"""Creates a new company entity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/companies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsCompaniesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Company])
                res.company = out

        return res

    
    def jobs_projects_tenants_companies_list(self, request: operations.JobsProjectsTenantsCompaniesListRequest) -> operations.JobsProjectsTenantsCompaniesListResponse:
        r"""Lists all companies associated with the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/companies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsCompaniesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCompaniesResponse])
                res.list_companies_response = out

        return res

    
    def jobs_projects_tenants_complete_query(self, request: operations.JobsProjectsTenantsCompleteQueryRequest) -> operations.JobsProjectsTenantsCompleteQueryResponse:
        r"""Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{tenant}:completeQuery", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsCompleteQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteQueryResponse])
                res.complete_query_response = out

        return res

    
    def jobs_projects_tenants_create(self, request: operations.JobsProjectsTenantsCreateRequest) -> operations.JobsProjectsTenantsCreateResponse:
        r"""Creates a new tenant entity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/tenants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def jobs_projects_tenants_jobs_batch_create(self, request: operations.JobsProjectsTenantsJobsBatchCreateRequest) -> operations.JobsProjectsTenantsJobsBatchCreateResponse:
        r"""Begins executing a batch create jobs operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/jobs:batchCreate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def jobs_projects_tenants_jobs_batch_delete(self, request: operations.JobsProjectsTenantsJobsBatchDeleteRequest) -> operations.JobsProjectsTenantsJobsBatchDeleteResponse:
        r"""Begins executing a batch delete jobs operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/jobs:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def jobs_projects_tenants_jobs_batch_update(self, request: operations.JobsProjectsTenantsJobsBatchUpdateRequest) -> operations.JobsProjectsTenantsJobsBatchUpdateResponse:
        r"""Begins executing a batch update jobs operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/jobs:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def jobs_projects_tenants_jobs_create(self, request: operations.JobsProjectsTenantsJobsCreateRequest) -> operations.JobsProjectsTenantsJobsCreateResponse:
        r"""Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/jobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def jobs_projects_tenants_jobs_delete(self, request: operations.JobsProjectsTenantsJobsDeleteRequest) -> operations.JobsProjectsTenantsJobsDeleteResponse:
        r"""Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def jobs_projects_tenants_jobs_get(self, request: operations.JobsProjectsTenantsJobsGetRequest) -> operations.JobsProjectsTenantsJobsGetResponse:
        r"""Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def jobs_projects_tenants_jobs_list(self, request: operations.JobsProjectsTenantsJobsListRequest) -> operations.JobsProjectsTenantsJobsListResponse:
        r"""Lists jobs by filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    def jobs_projects_tenants_jobs_patch(self, request: operations.JobsProjectsTenantsJobsPatchRequest) -> operations.JobsProjectsTenantsJobsPatchResponse:
        r"""Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def jobs_projects_tenants_jobs_search(self, request: operations.JobsProjectsTenantsJobsSearchRequest) -> operations.JobsProjectsTenantsJobsSearchResponse:
        r"""Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/jobs:search", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchJobsResponse])
                res.search_jobs_response = out

        return res

    
    def jobs_projects_tenants_jobs_search_for_alert(self, request: operations.JobsProjectsTenantsJobsSearchForAlertRequest) -> operations.JobsProjectsTenantsJobsSearchForAlertResponse:
        r"""Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/jobs:searchForAlert", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsJobsSearchForAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchJobsResponse])
                res.search_jobs_response = out

        return res

    
    def jobs_projects_tenants_list(self, request: operations.JobsProjectsTenantsListRequest) -> operations.JobsProjectsTenantsListResponse:
        r"""Lists all tenants associated with the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/tenants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsProjectsTenantsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTenantsResponse])
                res.list_tenants_response = out

        return res

    