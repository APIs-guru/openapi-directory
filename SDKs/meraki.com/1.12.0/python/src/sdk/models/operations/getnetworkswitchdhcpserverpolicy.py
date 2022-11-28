from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchDhcpServerPolicyPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchDhcpServerPolicyRequest:
    path_params: GetNetworkSwitchDhcpServerPolicyPathParams = field()
    

@dataclass
class GetNetworkSwitchDhcpServerPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_dhcp_server_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
