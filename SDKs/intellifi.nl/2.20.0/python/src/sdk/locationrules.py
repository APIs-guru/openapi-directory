import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Locationrules:
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

    
    def add_location_rule(self, request: operations.AddLocationRuleRequest) -> operations.AddLocationRuleResponse:
        r"""Create location rule
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locationrules"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddLocationRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def delete_location_rule(self, request: operations.DeleteLocationRuleRequest) -> operations.DeleteLocationRuleResponse:
        r"""Delete location rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/locationrules/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLocationRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def get_location_rule_by_id(self, request: operations.GetLocationRuleByIDRequest) -> operations.GetLocationRuleByIDResponse:
        r"""Get location rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/locationrules/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationRuleByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationRule])
                res.location_rule = out

        return res

    
    def get_location_rules(self, request: operations.GetLocationRulesRequest) -> operations.GetLocationRulesResponse:
        r"""Get all location rules
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locationrules"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationRules200ApplicationJSON])
                res.get_location_rules_200_application_json_object = out

        return res

    
    def update_location_rule(self, request: operations.UpdateLocationRuleRequest) -> operations.UpdateLocationRuleResponse:
        r"""Update existing location rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/locationrules/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLocationRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    