from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs:
    hub_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hubId' }})
    use_default_route: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDefaultRoute' }})
    
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum(str, Enum):
    NONE = "none"
    SPOKE = "spoke"
    HUB = "hub"


@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets:
    local_subnet: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localSubnet' }})
    use_vpn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useVpn' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody:
    hubs: Optional[List[UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hubs' }})
    mode: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    subnets: Optional[List[UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    

@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequest:
    path_params: UpdateNetworkApplianceVpnSiteToSiteVpnPathParams = field(default=None)
    request: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_vpn_site_to_site_vpn_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
