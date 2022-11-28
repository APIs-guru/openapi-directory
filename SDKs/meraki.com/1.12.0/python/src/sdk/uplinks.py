import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Uplinks:
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

    
    def get_network_appliance_uplinks_usage_history(self, request: operations.GetNetworkApplianceUplinksUsageHistoryRequest) -> operations.GetNetworkApplianceUplinksUsageHistoryResponse:
        r"""Get the sent and received bytes for each uplink of a network.
        Get the sent and received bytes for each uplink of a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/uplinks/usageHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceUplinksUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_uplinks_usage_history_200_application_json_object = out

        return res

    
    def get_organization_uplinks_statuses(self, request: operations.GetOrganizationUplinksStatusesRequest) -> operations.GetOrganizationUplinksStatusesResponse:
        r"""List the uplink status of every Meraki MX, MG and Z series devices in the organization
        List the uplink status of every Meraki MX, MG and Z series devices in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/uplinks/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationUplinksStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_uplinks_statuses_200_application_json_object = out

        return res

    