import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Stacks:
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

    
    def add_network_switch_stack(self, request: operations.AddNetworkSwitchStackRequest) -> operations.AddNetworkSwitchStackResponse:
        r"""Add a switch to a stack
        Add a switch to a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/add", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.add_network_switch_stack_200_application_json_object = out

        return res

    
    def create_network_switch_stack(self, request: operations.CreateNetworkSwitchStackRequest) -> operations.CreateNetworkSwitchStackResponse:
        r"""Create a stack
        Create a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_201_application_json_object = out

        return res

    
    def create_network_switch_stack_routing_interface(self, request: operations.CreateNetworkSwitchStackRoutingInterfaceRequest) -> operations.CreateNetworkSwitchStackRoutingInterfaceResponse:
        r"""Create a layer 3 interface for a switch stack
        Create a layer 3 interface for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_interface_201_application_json_object = out

        return res

    
    def create_network_switch_stack_routing_static_route(self, request: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.CreateNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Create a layer 3 static route for a switch stack
        Create a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_static_route_201_application_json_object = out

        return res

    
    def delete_network_switch_stack(self, request: operations.DeleteNetworkSwitchStackRequest) -> operations.DeleteNetworkSwitchStackResponse:
        r"""Delete a stack
        Delete a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_stack_routing_interface(self, request: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest) -> operations.DeleteNetworkSwitchStackRoutingInterfaceResponse:
        r"""Delete a layer 3 interface from a switch stack
        Delete a layer 3 interface from a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_stack_routing_static_route(self, request: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest) -> operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Delete a layer 3 static route for a switch stack
        Delete a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_switch_stack(self, request: operations.GetNetworkSwitchStackRequest) -> operations.GetNetworkSwitchStackResponse:
        r"""Show a switch stack
        Show a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interface(self, request: operations.GetNetworkSwitchStackRoutingInterfaceRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceResponse:
        r"""Return a layer 3 interface from a switch stack
        Return a layer 3 interface from a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interface_dhcp(self, request: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse:
        r"""Return a layer 3 interface DHCP configuration for a switch stack
        Return a layer 3 interface DHCP configuration for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interfaces(self, request: operations.GetNetworkSwitchStackRoutingInterfacesRequest) -> operations.GetNetworkSwitchStackRoutingInterfacesResponse:
        r"""List layer 3 interfaces for a switch stack
        List layer 3 interfaces for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interfaces_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_static_route(self, request: operations.GetNetworkSwitchStackRoutingStaticRouteRequest) -> operations.GetNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Return a layer 3 static route for a switch stack
        Return a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_static_routes(self, request: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest) -> operations.GetNetworkSwitchStackRoutingStaticRoutesResponse:
        r"""List layer 3 static routes for a switch stack
        List layer 3 static routes for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_routes_200_application_json_object = out

        return res

    
    def get_network_switch_stacks(self, request: operations.GetNetworkSwitchStacksRequest) -> operations.GetNetworkSwitchStacksResponse:
        r"""List the switch stacks in a network
        List the switch stacks in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStacksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stacks_200_application_json_object = out

        return res

    
    def remove_network_switch_stack(self, request: operations.RemoveNetworkSwitchStackRequest) -> operations.RemoveNetworkSwitchStackResponse:
        r"""Remove a switch from a stack
        Remove a switch from a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.remove_network_switch_stack_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_interface(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceResponse:
        r"""Update a layer 3 interface for a switch stack
        Update a layer 3 interface for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_interface_dhcp(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse:
        r"""Update a layer 3 interface DHCP configuration for a switch stack
        Update a layer 3 interface DHCP configuration for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_static_route(self, request: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Update a layer 3 static route for a switch stack
        Update a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    