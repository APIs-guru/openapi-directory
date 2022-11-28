from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationApplianceVpnVpnFirewallRulesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationApplianceVpnVpnFirewallRulesRequest:
    path_params: GetOrganizationApplianceVpnVpnFirewallRulesPathParams = field()
    

@dataclass
class GetOrganizationApplianceVpnVpnFirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
