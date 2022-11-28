from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceSwitchWarmSparePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchWarmSpareRequestBody:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    spare_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spareSerial') }})
    

@dataclass
class UpdateDeviceSwitchWarmSpareRequest:
    path_params: UpdateDeviceSwitchWarmSparePathParams = field()
    request: UpdateDeviceSwitchWarmSpareRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceSwitchWarmSpareResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_switch_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
