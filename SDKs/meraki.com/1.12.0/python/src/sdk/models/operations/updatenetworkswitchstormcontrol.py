from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchStormControlPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchStormControlRequestBody:
    broadcast_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'broadcastThreshold' }})
    multicast_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multicastThreshold' }})
    unknown_unicast_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknownUnicastThreshold' }})
    

@dataclass
class UpdateNetworkSwitchStormControlRequest:
    path_params: UpdateNetworkSwitchStormControlPathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchStormControlRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchStormControlResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_storm_control_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
