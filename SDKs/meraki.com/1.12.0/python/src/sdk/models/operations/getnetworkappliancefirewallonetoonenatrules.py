from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesRequest:
    path_params: GetNetworkApplianceFirewallOneToOneNatRulesPathParams = field()
    

@dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
