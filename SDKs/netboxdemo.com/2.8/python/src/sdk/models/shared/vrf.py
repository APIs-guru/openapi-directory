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
class Vrf:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    enforce_unique: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_unique') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ipaddress_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipaddress_count') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    prefix_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix_count') }})
    rd: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rd') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
