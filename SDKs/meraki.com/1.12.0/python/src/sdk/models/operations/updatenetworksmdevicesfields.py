from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSmDevicesFieldsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields:
    r"""UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields
    The new fields of the device. Each field of this object is optional.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSmDevicesFieldsRequestBody:
    device_fields: UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceFields') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    wifi_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMac') }})
    

@dataclass
class UpdateNetworkSmDevicesFieldsRequest:
    path_params: UpdateNetworkSmDevicesFieldsPathParams = field()
    request: UpdateNetworkSmDevicesFieldsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSmDevicesFieldsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_sm_devices_fields_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
