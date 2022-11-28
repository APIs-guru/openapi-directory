from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceVpnBgpPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceVpnBgpRequest:
    path_params: GetNetworkApplianceVpnBgpPathParams = field()
    

@dataclass
class GetNetworkApplianceVpnBgpResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_vpn_bgp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
