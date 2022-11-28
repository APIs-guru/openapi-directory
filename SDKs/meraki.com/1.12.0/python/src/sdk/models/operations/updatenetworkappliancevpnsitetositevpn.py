from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs:
    hub_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hubId') }})
    use_default_route: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultRoute') }})
    
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum(str, Enum):
    NONE = "none"
    SPOKE = "spoke"
    HUB = "hub"


@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets:
    local_subnet: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localSubnet') }})
    use_vpn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useVpn') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody:
    mode: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    hubs: Optional[List[UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hubs') }})
    subnets: Optional[List[UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    

@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequest:
    path_params: UpdateNetworkApplianceVpnSiteToSiteVpnPathParams = field()
    request: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_vpn_site_to_site_vpn_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
