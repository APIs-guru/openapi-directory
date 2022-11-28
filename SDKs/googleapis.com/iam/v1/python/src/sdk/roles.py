import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Roles:
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

    
    def iam_roles_get(self, request: operations.IamRolesGetRequest) -> operations.IamRolesGetResponse:
        r"""Gets the definition of a Role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IamRolesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def iam_roles_list(self, request: operations.IamRolesListRequest) -> operations.IamRolesListResponse:
        r"""Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/roles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IamRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRolesResponse])
                res.list_roles_response = out

        return res

    
    def iam_roles_query_grantable_roles(self, request: operations.IamRolesQueryGrantableRolesRequest) -> operations.IamRolesQueryGrantableRolesResponse:
        r"""Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/roles:queryGrantableRoles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IamRolesQueryGrantableRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryGrantableRolesResponse])
                res.query_grantable_roles_response = out

        return res

    