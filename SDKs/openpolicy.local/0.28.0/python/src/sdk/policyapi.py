import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PolicyAPI:
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

    
    def delete_policy_module(self, request: operations.DeletePolicyModuleRequest) -> operations.DeletePolicyModuleResponse:
        r"""Delete a policy module
        This API endpoint removes an existing policy module from the server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/policies/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePolicyModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePolicyModule200ApplicationJSON])
                res.delete_policy_module_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndFour])
                res.four_hundred_and_four = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    
    def get_policies(self, request: operations.GetPoliciesRequest) -> operations.GetPoliciesResponse:
        r"""List policies
        This API endpoint responds with a list of all policy modules on the server (result response)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/policies"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TwoHundredResult])
                res.two_hundred_result = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    
    def get_policy_module(self, request: operations.GetPolicyModuleRequest) -> operations.GetPolicyModuleResponse:
        r"""Get a policy module
        This API endpoint returns the details of the specified policy module (`{id}`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/policies/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPolicyModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TwoHundredResult])
                res.two_hundred_result = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndFour])
                res.four_hundred_and_four = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    
    def put_policy_module(self, request: operations.PutPolicyModuleRequest) -> operations.PutPolicyModuleResponse:
        r"""Create or update a policy module
        - If the policy module does not exist, it is created.
        - If the policy module already exists, it is replaced.
        
        If the policy module isn't correctly defined, a *bad request* (400) response is returned.
        
        ### Example policy module
        ```yaml
        package opa.examples
        
        import data.servers
        import data.networks
        import data.ports
        
        public_servers[server] {
          some k, m
          	server := servers[_]
          	server.ports[_] == ports[k].id
          	ports[k].networks[_] == networks[m].id
          	networks[m].public == true
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/policies/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPolicyModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TwoHundredResult])
                res.two_hundred_result = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    