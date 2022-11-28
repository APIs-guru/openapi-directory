import requests
from typing import Optional
from sdk.models import operations
from . import utils

class FirewallActions:
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

    
    def get_firewalls_id_actions(self, request: operations.GetFirewallsIDActionsRequest) -> operations.GetFirewallsIDActionsResponse:
        r"""Get all Actions for a Firewall
        Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    def get_firewalls_id_actions_action_id_(self, request: operations.GetFirewallsIDActionsActionIDRequest) -> operations.GetFirewallsIDActionsActionIDResponse:
        r"""Get an Action for a Firewall
        Returns a specific Action for a Firewall.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_firewalls_id_actions_apply_to_resources(self, request: operations.PostFirewallsIDActionsApplyToResourcesRequest) -> operations.PostFirewallsIDActionsApplyToResourcesResponse:
        r"""Apply to Resources
        Applies one Firewall to multiple resources.
        
        Currently servers (public network interface) and label selectors are supported.
        
        #### Call specific error codes
        
        | Code                        | Description                                             |
        |-----------------------------|---------------------------------------------------------|
        | `firewall_already_applied`  | Firewall was already applied on resource                |
        | `incompatible_network_type` | The Network type is incompatible for the given resource |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/apply_to_resources", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsIDActionsApplyToResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsIDActionsApplyToResourcesActionsResponse])
                res.actions_response = out

        return res

    
    def post_firewalls_id_actions_remove_from_resources(self, request: operations.PostFirewallsIDActionsRemoveFromResourcesRequest) -> operations.PostFirewallsIDActionsRemoveFromResourcesResponse:
        r"""Remove from Resources
        Removes one Firewall from multiple resources.
        
        Currently only Servers (and their public network interfaces) are supported.
        
        #### Call specific error codes
        
        | Code                       | Description                                    |
        |----------------------------|------------------------------------------------|
        | `firewall_already_removed` | Firewall was already removed from the resource |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/remove_from_resources", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsIDActionsRemoveFromResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsIDActionsRemoveFromResourcesActionsResponse])
                res.actions_response = out

        return res

    
    def post_firewalls_id_actions_set_rules(self, request: operations.PostFirewallsIDActionsSetRulesRequest) -> operations.PostFirewallsIDActionsSetRulesResponse:
        r"""Set Rules
        Sets the rules of a Firewall.
        
        All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/set_rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsIDActionsSetRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsIDActionsSetRulesActionsResponse])
                res.actions_response = out

        return res

    