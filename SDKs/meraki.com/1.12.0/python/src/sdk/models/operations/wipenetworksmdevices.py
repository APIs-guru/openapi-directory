from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class WipeNetworkSmDevicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class WipeNetworkSmDevicesRequestBody:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    wifi_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMac') }})
    

@dataclass
class WipeNetworkSmDevicesRequest:
    path_params: WipeNetworkSmDevicesPathParams = field()
    request: Optional[WipeNetworkSmDevicesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WipeNetworkSmDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    wipe_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
