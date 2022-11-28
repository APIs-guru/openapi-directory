from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationApplianceVpnThirdPartyVpnPeersRequest:
    path_params: GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams = field()
    

@dataclass
class GetOrganizationApplianceVpnThirdPartyVpnPeersResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
