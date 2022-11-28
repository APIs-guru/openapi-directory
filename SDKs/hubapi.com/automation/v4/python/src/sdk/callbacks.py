import requests
from sdk.models import operations
from . import utils

class Callbacks:
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

    
    def post_automation_v4_actions_callbacks_complete_complete_batch(self, request: operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest) -> operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse:
        r"""Complete a batch of callbacks
        Completes the given action callbacks.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/automation/v4/actions/callbacks/complete"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Complete a callback
        Completes the given action callback.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automation/v4/actions/callbacks/{callbackId}/complete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    