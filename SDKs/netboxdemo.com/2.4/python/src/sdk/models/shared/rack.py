from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RackType:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class RackWidth:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Rack:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: NestedSite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    desc_units: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc_units') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    facility_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_id') }})
    group: Optional[NestedRackGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role: Optional[NestedRackRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    type: Optional[RackType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('u_height') }})
    width: Optional[RackWidth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
