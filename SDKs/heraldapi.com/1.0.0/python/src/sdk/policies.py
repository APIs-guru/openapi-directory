import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Policies:
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

    
    def get_policies_policy_id(self, request: operations.GetPoliciesPolicyIDRequest) -> operations.GetPoliciesPolicyIDResponse:
        r"""/policies/{policy_id}
        ### Get a policy
        Get the latest details for a specific policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/policies/{policy_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPoliciesPolicyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPoliciesPolicyID200ApplicationJSON])
                res.get_policies_policy_id_200_application_json_object = out

        return res

    
    def post_policies(self, request: operations.PostPoliciesRequest) -> operations.PostPoliciesResponse:
        r"""/policies
        ### Bind a policy
        Take a quote and bind it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/policies"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPolicies200ApplicationJSON])
                res.post_policies_200_application_json_object = out

        return res

    