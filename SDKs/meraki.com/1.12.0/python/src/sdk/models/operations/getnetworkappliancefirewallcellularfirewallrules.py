from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallCellularFirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallCellularFirewallRulesRequest:
    path_params: GetNetworkApplianceFirewallCellularFirewallRulesPathParams = field()
    

@dataclass
class GetNetworkApplianceFirewallCellularFirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_firewall_cellular_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
