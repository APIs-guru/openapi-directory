from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PrefixFamilyLabelEnum(str, Enum):
    I_PV4 = "IPv4"
    I_PV6 = "IPv6"


@dataclass_json
@dataclass
class PrefixFamily:
    label: PrefixFamilyLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class PrefixStatusLabelEnum(str, Enum):
    CONTAINER = "Container"
    ACTIVE = "Active"
    RESERVED = "Reserved"
    DEPRECATED = "Deprecated"

class PrefixStatusValueEnum(str, Enum):
    CONTAINER = "container"
    ACTIVE = "active"
    RESERVED = "reserved"
    DEPRECATED = "deprecated"


@dataclass_json
@dataclass
class PrefixStatus:
    label: PrefixStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: PrefixStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Prefix:
    prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    family: Optional[PrefixFamily] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_pool') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role: Optional[NestedRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    site: Optional[NestedSite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[PrefixStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vlan: Optional[NestedVlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    vrf: Optional[NestedVrf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vrf') }})
    
