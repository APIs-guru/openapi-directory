from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedvlangroup
from . import nestedrole
from . import nestedsite
from . import nestedtenant

class VlanStatusLabelEnum(str, Enum):
    ACTIVE = "Active"
    RESERVED = "Reserved"
    DEPRECATED = "Deprecated"

class VlanStatusValueEnum(str, Enum):
    ACTIVE = "active"
    RESERVED = "reserved"
    DEPRECATED = "deprecated"


@dataclass_json
@dataclass
class VlanStatusStatus:
    label: VlanStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: VlanStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Vlan:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    group: Optional[nestedvlangroup.NestedVlanGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prefix_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix_count' }})
    role: Optional[nestedrole.NestedRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    site: Optional[nestedsite.NestedSite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[VlanStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    vid: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vid' }})
    
