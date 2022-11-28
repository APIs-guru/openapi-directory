import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Uplink:
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

    
    def get_network_cellular_gateway_uplink(self, request: operations.GetNetworkCellularGatewayUplinkRequest) -> operations.GetNetworkCellularGatewayUplinkResponse:
        r"""Returns the uplink settings for your MG network.
        Returns the uplink settings for your MG network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    
    def get_organization_appliance_uplink_statuses(self, request: operations.GetOrganizationApplianceUplinkStatusesRequest) -> operations.GetOrganizationApplianceUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MX and Z series appliances in the organization
        List the uplink status of every Meraki MX and Z series appliances in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_uplink_statuses_200_application_json_object = out

        return res

    
    def get_organization_cellular_gateway_uplink_statuses(self, request: operations.GetOrganizationCellularGatewayUplinkStatusesRequest) -> operations.GetOrganizationCellularGatewayUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MG cellular gateway in the organization
        List the uplink status of every Meraki MG cellular gateway in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/cellularGateway/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCellularGatewayUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_cellular_gateway_uplink_statuses_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_uplink(self, request: operations.UpdateNetworkCellularGatewayUplinkRequest) -> operations.UpdateNetworkCellularGatewayUplinkResponse:
        r"""Updates the uplink settings for your MG network.
        Updates the uplink settings for your MG network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    