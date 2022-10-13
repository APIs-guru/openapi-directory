from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class MoveNetworkSmDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MoveNetworkSmDevicesRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    new_network: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newNetwork' }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serials' }})
    wifi_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMacs' }})
    

@dataclass
class MoveNetworkSmDevicesRequest:
    path_params: MoveNetworkSmDevicesPathParams = field(default=None)
    request: MoveNetworkSmDevicesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveNetworkSmDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    move_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
