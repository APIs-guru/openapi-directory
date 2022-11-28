from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeviceTypeSubdeviceRoleLabelEnum(str, Enum):
    PARENT = "Parent"
    CHILD = "Child"

class DeviceTypeSubdeviceRoleValueEnum(str, Enum):
    PARENT = "parent"
    CHILD = "child"


@dataclass_json
@dataclass
class DeviceTypeSubdeviceRole:
    label: DeviceTypeSubdeviceRoleLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: DeviceTypeSubdeviceRoleValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class DeviceType:
    manufacturer: NestedManufacturer = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_count') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    front_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('front_image') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_full_depth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_full_depth') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    part_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('part_number') }})
    rear_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rear_image') }})
    subdevice_role: Optional[DeviceTypeSubdeviceRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdevice_role') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('u_height') }})
    
