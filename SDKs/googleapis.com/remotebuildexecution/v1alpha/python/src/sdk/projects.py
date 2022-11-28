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

    
    def remotebuildexecution_projects_instances_create(self, request: operations.RemotebuildexecutionProjectsInstancesCreateRequest) -> operations.RemotebuildexecutionProjectsInstancesCreateResponse:
        r"""Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def remotebuildexecution_projects_instances_list(self, request: operations.RemotebuildexecutionProjectsInstancesListRequest) -> operations.RemotebuildexecutionProjectsInstancesListResponse:
        r"""Lists instances in a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse])
                res.google_devtools_remotebuildexecution_admin_v1alpha_list_instances_response = out

        return res

    
    def remotebuildexecution_projects_instances_test_notify(self, request: operations.RemotebuildexecutionProjectsInstancesTestNotifyRequest) -> operations.RemotebuildexecutionProjectsInstancesTestNotifyResponse:
        r"""Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:testNotify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsInstancesTestNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def remotebuildexecution_projects_instances_workerpools_create(self, request: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest) -> operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse:
        r"""Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/workerpools", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def remotebuildexecution_projects_instances_workerpools_delete(self, request: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest) -> operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse:
        r"""Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def remotebuildexecution_projects_instances_workerpools_list(self, request: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest) -> operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse:
        r"""Lists worker pools in an instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/workerpools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse])
                res.google_devtools_remotebuildexecution_admin_v1alpha_list_worker_pools_response = out

        return res

    
    def remotebuildexecution_projects_instances_workerpools_patch(self, request: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest) -> operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse:
        r"""Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def remotebuildexecution_projects_operations_get(self, request: operations.RemotebuildexecutionProjectsOperationsGetRequest) -> operations.RemotebuildexecutionProjectsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotebuildexecutionProjectsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    