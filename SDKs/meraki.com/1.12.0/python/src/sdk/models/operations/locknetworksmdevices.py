from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class LockNetworkSmDevicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class LockNetworkSmDevicesRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    pin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    wifi_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacs') }})
    

@dataclass
class LockNetworkSmDevicesRequest:
    path_params: LockNetworkSmDevicesPathParams = field()
    request: Optional[LockNetworkSmDevicesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LockNetworkSmDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    lock_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
