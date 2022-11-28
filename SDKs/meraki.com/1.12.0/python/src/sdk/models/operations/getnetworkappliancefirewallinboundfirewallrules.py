from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallInboundFirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallInboundFirewallRulesRequest:
    path_params: GetNetworkApplianceFirewallInboundFirewallRulesPathParams = field()
    

@dataclass
class GetNetworkApplianceFirewallInboundFirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_firewall_inbound_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
