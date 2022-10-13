from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesRequest:
    path_params: GetNetworkApplianceFirewallL7FirewallRulesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_l7_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
