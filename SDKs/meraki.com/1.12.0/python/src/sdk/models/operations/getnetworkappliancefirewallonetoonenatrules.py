from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesRequest:
    path_params: GetNetworkApplianceFirewallOneToOneNatRulesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
