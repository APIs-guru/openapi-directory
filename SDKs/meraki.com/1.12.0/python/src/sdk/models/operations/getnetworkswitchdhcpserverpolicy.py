from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchDhcpServerPolicyPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchDhcpServerPolicyRequest:
    path_params: GetNetworkSwitchDhcpServerPolicyPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchDhcpServerPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_dhcp_server_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
