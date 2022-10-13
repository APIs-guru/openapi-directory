from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallL3FirewallRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallL3FirewallRulesRequest:
    path_params: GetNetworkApplianceFirewallL3FirewallRulesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallL3FirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_l3_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
