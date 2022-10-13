from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CheckinNetworkSmDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CheckinNetworkSmDevicesRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serials' }})
    wifi_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMacs' }})
    

@dataclass
class CheckinNetworkSmDevicesRequest:
    path_params: CheckinNetworkSmDevicesPathParams = field(default=None)
    request: Optional[CheckinNetworkSmDevicesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckinNetworkSmDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    checkin_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
