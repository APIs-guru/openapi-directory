import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Revisions:
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

    
    def get_automation_v4_actions_app_id_definition_id_revisions_revision_id_get_by_id(self, request: operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest) -> operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse:
        r"""Get a revision for a custom action
        Returns the given version of a custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Get all revisions for a custom action
        Returns a list of revisions for a custom workflow action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/{appId}/{definitionId}/revisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
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

    