import requests
from typing import Optional
from sdk.models import operations
from . import utils

class VolumeActions:
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

    
    def get_volumes_id_actions(self, request: operations.GetVolumesIDActionsRequest) -> operations.GetVolumesIDActionsResponse:
        r"""Get all Actions for a Volume
        Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumesIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    def get_volumes_id_actions_action_id_(self, request: operations.GetVolumesIDActionsActionIDRequest) -> operations.GetVolumesIDActionsActionIDResponse:
        r"""Get an Action for a Volume
        Returns a specific Action for a Volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumesIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_volumes_id_actions_attach(self, request: operations.PostVolumesIDActionsAttachRequest) -> operations.PostVolumesIDActionsAttachResponse:
        r"""Attach Volume to a Server
        Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}/actions/attach", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsAttachResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsAttachActionResponse])
                res.action_response = out

        return res

    
    def post_volumes_id_actions_change_protection(self, request: operations.PostVolumesIDActionsChangeProtectionRequest) -> operations.PostVolumesIDActionsChangeProtectionResponse:
        r"""Change Volume Protection
        Changes the protection configuration of a Volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}/actions/change_protection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    def post_volumes_id_actions_detach(self, request: operations.PostVolumesIDActionsDetachRequest) -> operations.PostVolumesIDActionsDetachResponse:
        r"""Detach Volume
        Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}/actions/detach", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsDetachResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsDetachActionResponse])
                res.action_response = out

        return res

    
    def post_volumes_id_actions_resize(self, request: operations.PostVolumesIDActionsResizeRequest) -> operations.PostVolumesIDActionsResizeResponse:
        r"""Resize Volume
        Changes the size of a Volume. Note that downsizing a Volume is not possible.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}/actions/resize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsResizeActionResponse])
                res.action_response = out

        return res

    