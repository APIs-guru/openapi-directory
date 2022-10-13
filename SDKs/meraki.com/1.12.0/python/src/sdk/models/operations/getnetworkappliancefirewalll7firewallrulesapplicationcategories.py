from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest:
    path_params: GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_firewall_l7_firewall_rules_application_categories_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
