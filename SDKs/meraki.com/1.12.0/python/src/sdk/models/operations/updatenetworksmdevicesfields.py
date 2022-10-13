from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSmDevicesFieldsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSmDevicesFieldsRequestBody:
    device_fields: UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceFields' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    wifi_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMac' }})
    

@dataclass
class UpdateNetworkSmDevicesFieldsRequest:
    path_params: UpdateNetworkSmDevicesFieldsPathParams = field(default=None)
    request: UpdateNetworkSmDevicesFieldsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSmDevicesFieldsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_sm_devices_fields_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
