from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchRoutingMulticastPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings:
    flood_unknown_multicast_traffic_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodUnknownMulticastTrafficEnabled' }})
    igmp_snooping_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'igmpSnoopingEnabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides:
    flood_unknown_multicast_traffic_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodUnknownMulticastTrafficEnabled' }})
    igmp_snooping_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'igmpSnoopingEnabled' }})
    stacks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stacks' }})
    switch_profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchProfiles' }})
    switches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switches' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBody:
    default_settings: Optional[UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSettings' }})
    overrides: Optional[List[UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastRequest:
    path_params: UpdateNetworkSwitchRoutingMulticastPathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchRoutingMulticastRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_routing_multicast_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
