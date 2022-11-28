import requests
from typing import Optional
from sdk.models import operations
from . import utils

class FloatingIPs:
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

    
    def delete_floating_ips_id_(self, request: operations.DeleteFloatingIpsIDRequest) -> operations.DeleteFloatingIpsIDResponse:
        r"""Delete a Floating IP
        Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFloatingIpsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_floating_ips(self, request: operations.GetFloatingIpsRequest) -> operations.GetFloatingIpsResponse:
        r"""Get all Floating IPs
        Returns all Floating IP objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/floating_ips"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIps200ApplicationJSON])
                res.get_floating_ips_200_application_json_object = out

        return res

    
    def get_floating_ips_id_(self, request: operations.GetFloatingIpsIDRequest) -> operations.GetFloatingIpsIDResponse:
        r"""Get a Floating IP
        Returns a specific Floating IP object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIpsID200ApplicationJSON])
                res.get_floating_ips_id_200_application_json_object = out

        return res

    
    def post_floating_ips(self, request: operations.PostFloatingIpsRequest) -> operations.PostFloatingIpsResponse:
        r"""Create a Floating IP
        Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/floating_ips"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIps201ApplicationJSON])
                res.post_floating_ips_201_application_json_object = out

        return res

    
    def put_floating_ips_id_(self, request: operations.PutFloatingIpsIDRequest) -> operations.PutFloatingIpsIDResponse:
        r"""Update a Floating IP
        Updates the description or labels of a Floating IP.
        Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutFloatingIpsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutFloatingIpsID200ApplicationJSON])
                res.put_floating_ips_id_200_application_json_object = out

        return res

    