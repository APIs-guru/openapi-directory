from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest:
    path_params: GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams = field()
    

@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_firewall_l7_firewall_rules_application_categories_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
