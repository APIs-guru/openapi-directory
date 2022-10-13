from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceVpnSiteToSiteVpnPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceVpnSiteToSiteVpnRequest:
    path_params: GetNetworkApplianceVpnSiteToSiteVpnPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceVpnSiteToSiteVpnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_vpn_site_to_site_vpn_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
