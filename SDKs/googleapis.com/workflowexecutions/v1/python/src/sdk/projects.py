import requests
from typing import Optional
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

    
    def workflowexecutions_projects_locations_workflows_executions_cancel(self, request: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest) -> operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse:
        r"""Cancels an execution of the given name.
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

        res = operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def workflowexecutions_projects_locations_workflows_executions_create(self, request: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest) -> operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse:
        r"""Creates a new execution using the latest revision of the given workflow.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/executions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def workflowexecutions_projects_locations_workflows_executions_get(self, request: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest) -> operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse:
        r"""Returns an execution of the given name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def workflowexecutions_projects_locations_workflows_executions_list(self, request: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest) -> operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse:
        r"""Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListExecutionsResponse])
                res.list_executions_response = out

        return res

    
    def workflowexecutions_projects_locations_workflows_trigger_pubsub_execution(self, request: operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest) -> operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse:
        r"""Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{workflow}:triggerPubsubExecution", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    