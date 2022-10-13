import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.hubapi.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def delete_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_archive(self, request: operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveRequest) -> operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def delete_automation_v4_actions_app_id_definition_id_archive(self, request: operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveRequest) -> operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def get_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_get_by_id(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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

    
    
    def get_automation_v4_actions_app_id_definition_id_revisions_revision_id_get_by_id(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionRevision])
                res.action_revision = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def get_automation_v4_actions_app_id_definition_id_revisions_get_page(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/revisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionResponseActionRevisionForwardPaging])
                res.collection_response_action_revision_forward_paging = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def get_automation_v4_actions_app_id_definition_id_get_by_id(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDGetByIDRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDGetByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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

    
    
    def post_automation_v4_actions_callbacks_complete_complete_batch(self, request: operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest) -> operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/automation/v4/actions/callbacks/complete"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def post_automation_v4_actions_callbacks_callback_id_complete_complete(self, request: operations.PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteRequest) -> operations.PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/callbacks/{callbackId}/complete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def post_automation_v4_actions_app_id_create(self, request: operations.PostAutomationV4ActionsAppIDCreateRequest) -> operations.PostAutomationV4ActionsAppIDCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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

    
    
    def put_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_create_or_replace(self, request: operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceRequest) -> operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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

    