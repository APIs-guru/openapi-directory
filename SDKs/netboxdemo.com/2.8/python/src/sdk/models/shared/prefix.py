from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedrole
from . import nestedsite
from . import nestedtenant
from . import nestedvlan
from . import nestedvrf

class PrefixFamilyLabelEnum(str, Enum):
    I_PV4 = "IPv4"
    I_PV6 = "IPv6"


@dataclass_json
@dataclass
class PrefixFamily:
    label: PrefixFamilyLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
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
    label: PrefixStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: PrefixStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Prefix:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    family: Optional[PrefixFamily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_pool' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    role: Optional[nestedrole.NestedRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    site: Optional[nestedsite.NestedSite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[PrefixStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    vlan: Optional[nestedvlan.NestedVlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    vrf: Optional[nestedvrf.NestedVrf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vrf' }})
    
