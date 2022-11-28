from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallPortForwardingRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallPortForwardingRulesRequest:
    path_params: GetNetworkApplianceFirewallPortForwardingRulesPathParams = field()
    

@dataclass
class GetNetworkApplianceFirewallPortForwardingRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_firewall_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
