from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceCellularGatewayLanPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments:
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges:
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayLanRequestBody:
    fixed_ip_assignments: Optional[List[UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedIpAssignments') }})
    reserved_ip_ranges: Optional[List[UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRanges') }})
    

@dataclass
class UpdateDeviceCellularGatewayLanRequest:
    path_params: UpdateDeviceCellularGatewayLanPathParams = field()
    request: Optional[UpdateDeviceCellularGatewayLanRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCellularGatewayLanResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_cellular_gateway_lan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
