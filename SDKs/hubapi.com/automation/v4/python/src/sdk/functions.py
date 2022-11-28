import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Functions:
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

    
    def delete_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_archive(self, request: operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveRequest) -> operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveResponse:
        r"""Delete a custom action function
        Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def delete_automation_v4_actions_app_id_definition_id_functions_function_type_archive_by_function_type(self, request: operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeRequest) -> operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse:
        r"""Delete a custom action function
        Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_get_by_id(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDResponse:
        r"""Get a custom action function
        Returns the given function for a custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionFunction])
                res.action_function = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_automation_v4_actions_app_id_definition_id_functions_function_type_get_by_function_type(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeResponse:
        r"""Get a custom action function
        Returns the given function for a custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionFunction])
                res.action_function = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_automation_v4_actions_app_id_definition_id_functions_get_page(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse:
        r"""Get all custom action functions
        Returns a list of all functions that are associated with the given custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionResponseActionFunctionIdentifierNoPaging])
                res.collection_response_action_function_identifier_no_paging = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def put_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_create_or_replace(self, request: operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceRequest) -> operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse:
        r"""Create or replace a custom action function
        Creates or replaces a function for a custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionFunctionIdentifier])
                res.action_function_identifier = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def put_automation_v4_actions_app_id_definition_id_functions_function_type_create_or_replace_by_function_type(self, request: operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest) -> operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse:
        r"""Create or replace a custom action function
        Creates or replaces a function for a custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionFunctionIdentifier])
                res.action_function_identifier = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    