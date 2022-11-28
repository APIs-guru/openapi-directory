import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Namespaces:
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

    
    def run_namespaces_authorizeddomains_list(self, request: operations.RunNamespacesAuthorizeddomainsListRequest) -> operations.RunNamespacesAuthorizeddomainsListResponse:
        r"""List authorized domains.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/domains.cloudrun.com/v1/{parent}/authorizeddomains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesAuthorizeddomainsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAuthorizedDomainsResponse])
                res.list_authorized_domains_response = out

        return res

    
    def run_namespaces_configurations_list(self, request: operations.RunNamespacesConfigurationsListRequest) -> operations.RunNamespacesConfigurationsListResponse:
        r"""List configurations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{parent}/configurations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesConfigurationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConfigurationsResponse])
                res.list_configurations_response = out

        return res

    
    def run_namespaces_domainmappings_create(self, request: operations.RunNamespacesDomainmappingsCreateRequest) -> operations.RunNamespacesDomainmappingsCreateResponse:
        r"""Create a new domain mapping.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/domains.cloudrun.com/v1/{parent}/domainmappings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesDomainmappingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainMapping])
                res.domain_mapping = out

        return res

    
    def run_namespaces_domainmappings_delete(self, request: operations.RunNamespacesDomainmappingsDeleteRequest) -> operations.RunNamespacesDomainmappingsDeleteResponse:
        r"""Delete a domain mapping.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/domains.cloudrun.com/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesDomainmappingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Status])
                res.status = out

        return res

    
    def run_namespaces_domainmappings_get(self, request: operations.RunNamespacesDomainmappingsGetRequest) -> operations.RunNamespacesDomainmappingsGetResponse:
        r"""Get information about a domain mapping.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/domains.cloudrun.com/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesDomainmappingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainMapping])
                res.domain_mapping = out

        return res

    
    def run_namespaces_domainmappings_list(self, request: operations.RunNamespacesDomainmappingsListRequest) -> operations.RunNamespacesDomainmappingsListResponse:
        r"""List all domain mappings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/domains.cloudrun.com/v1/{parent}/domainmappings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesDomainmappingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDomainMappingsResponse])
                res.list_domain_mappings_response = out

        return res

    
    def run_namespaces_executions_cancel(self, request: operations.RunNamespacesExecutionsCancelRequest) -> operations.RunNamespacesExecutionsCancelResponse:
        r"""Cancel an execution.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesExecutionsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def run_namespaces_executions_list(self, request: operations.RunNamespacesExecutionsListRequest) -> operations.RunNamespacesExecutionsListResponse:
        r"""List executions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{parent}/executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesExecutionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListExecutionsResponse])
                res.list_executions_response = out

        return res

    
    def run_namespaces_jobs_create(self, request: operations.RunNamespacesJobsCreateRequest) -> operations.RunNamespacesJobsCreateResponse:
        r"""Create a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{parent}/jobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def run_namespaces_jobs_delete(self, request: operations.RunNamespacesJobsDeleteRequest) -> operations.RunNamespacesJobsDeleteResponse:
        r"""Delete a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesJobsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Status])
                res.status = out

        return res

    
    def run_namespaces_jobs_list(self, request: operations.RunNamespacesJobsListRequest) -> operations.RunNamespacesJobsListResponse:
        r"""List jobs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{parent}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListJobsResponse])
                res.list_jobs_response = out

        return res

    
    def run_namespaces_jobs_replace_job(self, request: operations.RunNamespacesJobsReplaceJobRequest) -> operations.RunNamespacesJobsReplaceJobResponse:
        r"""Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesJobsReplaceJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def run_namespaces_jobs_run(self, request: operations.RunNamespacesJobsRunRequest) -> operations.RunNamespacesJobsRunResponse:
        r"""Trigger creation of a new execution of this job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{name}:run", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesJobsRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def run_namespaces_revisions_list(self, request: operations.RunNamespacesRevisionsListRequest) -> operations.RunNamespacesRevisionsListResponse:
        r"""List revisions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{parent}/revisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesRevisionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRevisionsResponse])
                res.list_revisions_response = out

        return res

    
    def run_namespaces_routes_list(self, request: operations.RunNamespacesRoutesListRequest) -> operations.RunNamespacesRoutesListResponse:
        r"""List routes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{parent}/routes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesRoutesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRoutesResponse])
                res.list_routes_response = out

        return res

    
    def run_namespaces_services_create(self, request: operations.RunNamespacesServicesCreateRequest) -> operations.RunNamespacesServicesCreateResponse:
        r"""Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{parent}/services", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesServicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def run_namespaces_services_delete(self, request: operations.RunNamespacesServicesDeleteRequest) -> operations.RunNamespacesServicesDeleteResponse:
        r"""Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesServicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Status])
                res.status = out

        return res

    
    def run_namespaces_services_get(self, request: operations.RunNamespacesServicesGetRequest) -> operations.RunNamespacesServicesGetResponse:
        r"""Gets information about a service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesServicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def run_namespaces_services_list(self, request: operations.RunNamespacesServicesListRequest) -> operations.RunNamespacesServicesListResponse:
        r"""Lists services for the given project and region.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{parent}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServicesResponse])
                res.list_services_response = out

        return res

    
    def run_namespaces_services_replace_service(self, request: operations.RunNamespacesServicesReplaceServiceRequest) -> operations.RunNamespacesServicesReplaceServiceResponse:
        r"""Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/serving.knative.dev/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesServicesReplaceServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def run_namespaces_tasks_get(self, request: operations.RunNamespacesTasksGetRequest) -> operations.RunNamespacesTasksGetResponse:
        r"""Get information about a task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesTasksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out

        return res

    
    def run_namespaces_tasks_list(self, request: operations.RunNamespacesTasksListRequest) -> operations.RunNamespacesTasksListResponse:
        r"""List tasks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/run.googleapis.com/v1/{parent}/tasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunNamespacesTasksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTasksResponse])
                res.list_tasks_response = out

        return res

    