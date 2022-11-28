from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchRoutingMulticastPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings:
    r"""UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings
    Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
    """
    
    flood_unknown_multicast_traffic_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodUnknownMulticastTrafficEnabled') }})
    igmp_snooping_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('igmpSnoopingEnabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides:
    flood_unknown_multicast_traffic_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodUnknownMulticastTrafficEnabled') }})
    igmp_snooping_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('igmpSnoopingEnabled') }})
    stacks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stacks') }})
    switch_profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfiles') }})
    switches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBody:
    default_settings: Optional[UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSettings') }})
    overrides: Optional[List[UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastRequest:
    path_params: UpdateNetworkSwitchRoutingMulticastPathParams = field()
    request: Optional[UpdateNetworkSwitchRoutingMulticastRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_routing_multicast_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
