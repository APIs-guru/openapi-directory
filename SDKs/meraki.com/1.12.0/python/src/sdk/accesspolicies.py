import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class AccessPolicies:
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

    
    def create_network_switch_access_policy(self, request: operations.CreateNetworkSwitchAccessPolicyRequest) -> operations.CreateNetworkSwitchAccessPolicyResponse:
        r"""Create an access policy for a switch network
        Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_access_policy_201_application_json_object = out

        return res

    
    def delete_network_switch_access_policy(self, request: operations.DeleteNetworkSwitchAccessPolicyRequest) -> operations.DeleteNetworkSwitchAccessPolicyResponse:
        r"""Delete an access policy for a switch network
        Delete an access policy for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_switch_access_policies(self, request: operations.GetNetworkSwitchAccessPoliciesRequest) -> operations.GetNetworkSwitchAccessPoliciesResponse:
        r"""List the access policies for a switch network
        List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policies_200_application_json_object = out

        return res

    
    def get_network_switch_access_policy(self, request: operations.GetNetworkSwitchAccessPolicyRequest) -> operations.GetNetworkSwitchAccessPolicyResponse:
        r"""Return a specific access policy for a switch network
        Return a specific access policy for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policy_200_application_json_object = out

        return res

    
    def update_network_switch_access_policy(self, request: operations.UpdateNetworkSwitchAccessPolicyRequest) -> operations.UpdateNetworkSwitchAccessPolicyResponse:
        r"""Update an access policy for a switch network
        Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_access_policy_200_application_json_object = out

        return res

    