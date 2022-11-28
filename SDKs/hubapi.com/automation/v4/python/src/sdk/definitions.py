import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Definitions:
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

    
    def delete_automation_v4_actions_app_id_definition_id_archive(self, request: operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveRequest) -> operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse:
        r"""Archive a custom action
        Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_automation_v4_actions_app_id_definition_id_get_by_id(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDGetByIDRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDGetByIDResponse:
        r"""Get a custom action
        Returns a single custom workflow action with the specified ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationV4ActionsAppIDDefinitionIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExtensionActionDefinition])
                res.extension_action_definition = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_automation_v4_actions_app_id_get_page(self, request: operations.GetAutomationV4ActionsAppIDGetPageRequest) -> operations.GetAutomationV4ActionsAppIDGetPageResponse:
        r"""Get all custom actions
        Returns a list of all custom workflow actions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationV4ActionsAppIDGetPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionResponseExtensionActionDefinitionForwardPaging])
                res.collection_response_extension_action_definition_forward_paging = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_automation_v4_actions_app_id_definition_id_update(self, request: operations.PatchAutomationV4ActionsAppIDDefinitionIDUpdateRequest) -> operations.PatchAutomationV4ActionsAppIDDefinitionIDUpdateResponse:
        r"""Update a custom action
        Updates a custom workflow action with new values for the specified fields.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAutomationV4ActionsAppIDDefinitionIDUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExtensionActionDefinition])
                res.extension_action_definition = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_automation_v4_actions_app_id_create(self, request: operations.PostAutomationV4ActionsAppIDCreateRequest) -> operations.PostAutomationV4ActionsAppIDCreateResponse:
        r"""Create new custom action
        Creates a new custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAutomationV4ActionsAppIDCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExtensionActionDefinition])
                res.extension_action_definition = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    