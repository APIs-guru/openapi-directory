import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Networks:
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

    
    def delete_networks_id_(self, request: operations.DeleteNetworksIDRequest) -> operations.DeleteNetworksIDResponse:
        r"""Delete a Network
        Deletes a network. If there are Servers attached they will be detached in the background.
        
        Note: if the network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_networks(self, request: operations.GetNetworksRequest) -> operations.GetNetworksResponse:
        r"""Get all Networks
        Gets all existing networks that you have available.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworks200ApplicationJSON])
                res.get_networks_200_application_json_object = out

        return res

    
    def get_networks_id_(self, request: operations.GetNetworksIDRequest) -> operations.GetNetworksIDResponse:
        r"""Get a Network
        Gets a specific network object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworksID200ApplicationJSON])
                res.get_networks_id_200_application_json_object = out

        return res

    
    def post_networks(self, request: operations.PostNetworksRequest) -> operations.PostNetworksResponse:
        r"""Create a Network
        Creates a network with the specified `ip_range`.
        
        You may specify one or more `subnets`. You can also add more Subnets later by using the [add subnet action](https://docs.hetzner.cloud/#network-actions-add-a-subnet-to-a-network). If you do not specify an `ip_range` in the subnet we will automatically pick the first available /24 range for you.
        
        You may specify one or more routes in `routes`. You can also add more routes later by using the [add route action](https://docs.hetzner.cloud/#network-actions-add-a-route-to-a-network).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworks201ApplicationJSON])
                res.post_networks_201_application_json_object = out

        return res

    
    def put_networks_id_(self, request: operations.PutNetworksIDRequest) -> operations.PutNetworksIDResponse:
        r"""Update a Network
        Updates the network properties.
        
        Note that when updating labels, the network’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        Note: if the network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutNetworksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNetworksID200ApplicationJSON])
                res.put_networks_id_200_application_json_object = out

        return res

    