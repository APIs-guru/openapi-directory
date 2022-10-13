from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallOneToManyNatRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallOneToManyNatRulesRequest:
    path_params: GetNetworkApplianceFirewallOneToManyNatRulesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallOneToManyNatRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
