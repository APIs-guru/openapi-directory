from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class WipeNetworkSmDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class WipeNetworkSmDevicesRequestBody:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    pin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    wifi_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMac' }})
    

@dataclass
class WipeNetworkSmDevicesRequest:
    path_params: WipeNetworkSmDevicesPathParams = field(default=None)
    request: Optional[WipeNetworkSmDevicesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WipeNetworkSmDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wipe_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
