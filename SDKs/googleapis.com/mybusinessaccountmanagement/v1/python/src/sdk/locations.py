import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def mybusinessaccountmanagement_locations_admins_create(self, request: operations.MybusinessaccountmanagementLocationsAdminsCreateRequest) -> operations.MybusinessaccountmanagementLocationsAdminsCreateResponse:
        r"""Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/admins", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementLocationsAdminsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Admin])
                res.admin = out

        return res

    
    def mybusinessaccountmanagement_locations_admins_delete(self, request: operations.MybusinessaccountmanagementLocationsAdminsDeleteRequest) -> operations.MybusinessaccountmanagementLocationsAdminsDeleteResponse:
        r"""Removes the specified admin as a manager of the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementLocationsAdminsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusinessaccountmanagement_locations_admins_list(self, request: operations.MybusinessaccountmanagementLocationsAdminsListRequest) -> operations.MybusinessaccountmanagementLocationsAdminsListResponse:
        r"""Lists all of the admins for the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/admins", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementLocationsAdminsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationAdminsResponse])
                res.list_location_admins_response = out

        return res

    
    def mybusinessaccountmanagement_locations_admins_patch(self, request: operations.MybusinessaccountmanagementLocationsAdminsPatchRequest) -> operations.MybusinessaccountmanagementLocationsAdminsPatchResponse:
        r"""Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementLocationsAdminsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Admin])
                res.admin = out

        return res

    
    def mybusinessaccountmanagement_locations_transfer(self, request: operations.MybusinessaccountmanagementLocationsTransferRequest) -> operations.MybusinessaccountmanagementLocationsTransferResponse:
        r"""Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:transfer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementLocationsTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    