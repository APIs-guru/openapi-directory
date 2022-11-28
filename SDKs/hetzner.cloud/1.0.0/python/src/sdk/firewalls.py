import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Firewalls:
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

    
    def delete_firewalls_id_(self, request: operations.DeleteFirewallsIDRequest) -> operations.DeleteFirewallsIDResponse:
        r"""Delete a Firewall
        Deletes a Firewall.
        
        #### Call specific error codes
        
        | Code              | Description                               |
        |-------------------|-------------------------------------------|
        | `resource_in_use` | Firewall must not be in use to be deleted |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFirewallsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_firewalls(self, request: operations.GetFirewallsRequest) -> operations.GetFirewallsResponse:
        r"""Get all Firewalls
        Returns all Firewall objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/firewalls"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsFirewallsResponse])
                res.firewalls_response = out

        return res

    
    def get_firewalls_id_(self, request: operations.GetFirewallsIDRequest) -> operations.GetFirewallsIDResponse:
        r"""Get a Firewall
        Gets a specific Firewall object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsIDFirewallResponse])
                res.firewall_response = out

        return res

    
    def post_firewalls(self, request: operations.PostFirewallsRequest) -> operations.PostFirewallsResponse:
        r"""Create a Firewall
        Creates a new Firewall.
        
        #### Call specific error codes
        
        | Code                        | Description                                             |
        |-----------------------------|---------------------------------------------------------|
        | `server_already_added`      | Server added more than one time to resource             |
        | `incompatible_network_type` | The Network type is incompatible for the given resource |
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/firewalls"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsCreateFirewallResponse])
                res.create_firewall_response = out

        return res

    
    def put_firewalls_id_(self, request: operations.PutFirewallsIDRequest) -> operations.PutFirewallsIDResponse:
        r"""Update a Firewall
        Updates the Firewall.
        
        Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        Note: if the Firewall object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/firewalls/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutFirewallsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutFirewallsIDFirewallResponse])
                res.firewall_response = out

        return res

    