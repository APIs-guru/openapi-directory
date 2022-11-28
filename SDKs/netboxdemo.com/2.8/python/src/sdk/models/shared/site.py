from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SiteStatusLabelEnum(str, Enum):
    ACTIVE = "Active"
    PLANNED = "Planned"
    RETIRED = "Retired"

class SiteStatusValueEnum(str, Enum):
    ACTIVE = "active"
    PLANNED = "planned"
    RETIRED = "retired"


@dataclass_json
@dataclass
class SiteStatus:
    label: SiteStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: SiteStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Site:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    circuit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit_count') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_phone') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_count') }})
    facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    physical_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physical_address') }})
    prefix_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix_count') }})
    rack_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack_count') }})
    region: Optional[NestedRegion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    shipping_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address') }})
    status: Optional[SiteStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_zone') }})
    virtualmachine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualmachine_count') }})
    vlan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan_count') }})
    
