

import requests
from sdk.models import operations
from . import utils


from .create_user import CreateUser
from .credential_operations import CredentialOperations
from .lifecycle_operations import LifecycleOperations


SERVERS = [
	"http://okta.local",
	"https://,",
]


class SDK:
    
    create_user: CreateUser
    credential_operations: CredentialOperations
    lifecycle_operations: LifecycleOperations

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def clear_user_sessions(self, request: operations.ClearUserSessionsRequest) -> operations.ClearUserSessionsResponse:
        r"""Clear User Sessions
        Clear User Sessions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/sessions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClearUserSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def find_user(self, request: operations.FindUserRequest) -> operations.FindUserResponse:
        r"""Find User
        Find User
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FindUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_assigned_app_links(self, request: operations.GetAssignedAppLinksRequest) -> operations.GetAssignedAppLinksResponse:
        r"""Get Assigned App Links
        Get Assigned App Links
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/appLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssignedAppLinksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_current_user(self, request: operations.GetCurrentUserRequest) -> operations.GetCurrentUserResponse:
        r"""Get Current User
        Get Current User
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/users/me"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_groups_for_user(self, request: operations.GetGroupsForUserRequest) -> operations.GetGroupsForUserResponse:
        r"""Get Groups for User
        Get Groups for User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/groups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Get User
        Get User
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def reset_factors(self, request: operations.ResetFactorsRequest) -> operations.ResetFactorsResponse:
        r"""Reset Factors
        Reset Factors
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/users/{userId}/lifecycle/reset_factors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetFactorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    