import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class StaticRoutes:
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

    
    def create_device_switch_routing_static_route(self, request: operations.CreateDeviceSwitchRoutingStaticRouteRequest) -> operations.CreateDeviceSwitchRoutingStaticRouteResponse:
        r"""Create a layer 3 static route for a switch
        Create a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_device_switch_routing_static_route_201_application_json_object = out

        return res

    
    def create_network_appliance_static_route(self, request: operations.CreateNetworkApplianceStaticRouteRequest) -> operations.CreateNetworkApplianceStaticRouteResponse:
        r"""Add a static route for an MX or teleworker network
        Add a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_static_route_201_application_json_object = out

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

    
    def delete_device_switch_routing_static_route(self, request: operations.DeleteDeviceSwitchRoutingStaticRouteRequest) -> operations.DeleteDeviceSwitchRoutingStaticRouteResponse:
        r"""Delete a layer 3 static route for a switch
        Delete a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_appliance_static_route(self, request: operations.DeleteNetworkApplianceStaticRouteRequest) -> operations.DeleteNetworkApplianceStaticRouteResponse:
        r"""Delete a static route from an MX or teleworker network
        Delete a static route from an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_device_switch_routing_static_route(self, request: operations.GetDeviceSwitchRoutingStaticRouteRequest) -> operations.GetDeviceSwitchRoutingStaticRouteResponse:
        r"""Return a layer 3 static route for a switch
        Return a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    def get_device_switch_routing_static_routes(self, request: operations.GetDeviceSwitchRoutingStaticRoutesRequest) -> operations.GetDeviceSwitchRoutingStaticRoutesResponse:
        r"""List layer 3 static routes for a switch
        List layer 3 static routes for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_routes_200_application_json_object = out

        return res

    
    def get_network_appliance_static_route(self, request: operations.GetNetworkApplianceStaticRouteRequest) -> operations.GetNetworkApplianceStaticRouteResponse:
        r"""Return a static route for an MX or teleworker network
        Return a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_route_200_application_json_object = out

        return res

    
    def get_network_appliance_static_routes(self, request: operations.GetNetworkApplianceStaticRoutesRequest) -> operations.GetNetworkApplianceStaticRoutesResponse:
        r"""List the static routes for an MX or teleworker network
        List the static routes for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_routes_200_application_json_object = out

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

    
    def update_device_switch_routing_static_route(self, request: operations.UpdateDeviceSwitchRoutingStaticRouteRequest) -> operations.UpdateDeviceSwitchRoutingStaticRouteResponse:
        r"""Update a layer 3 static route for a switch
        Update a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    def update_network_appliance_static_route(self, request: operations.UpdateNetworkApplianceStaticRouteRequest) -> operations.UpdateNetworkApplianceStaticRouteResponse:
        r"""Update a static route for an MX or teleworker network
        Update a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_static_route_200_application_json_object = out

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

    