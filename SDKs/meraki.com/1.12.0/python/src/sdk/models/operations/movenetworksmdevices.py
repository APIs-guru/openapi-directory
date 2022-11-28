from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class MoveNetworkSmDevicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MoveNetworkSmDevicesRequestBody:
    new_network: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newNetwork') }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    wifi_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacs') }})
    

@dataclass
class MoveNetworkSmDevicesRequest:
    path_params: MoveNetworkSmDevicesPathParams = field()
    request: MoveNetworkSmDevicesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveNetworkSmDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    move_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
