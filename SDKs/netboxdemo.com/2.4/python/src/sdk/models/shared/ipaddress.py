from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import ipaddressinterface
from . import nestedipaddress
from . import nestedipaddress
from . import nestedtenant
from . import nestedvrf


@dataclass_json
@dataclass
class IPAddressRoleRole:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class IPAddressStatusStatus:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class IPAddress:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    family: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface: Optional[ipaddressinterface.IPAddressInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nat_inside: Optional[nestedipaddress.NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nat_inside' }})
    nat_outside: Optional[nestedipaddress.NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nat_outside' }})
    role: Optional[IPAddressRoleRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    status: Optional[IPAddressStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    vrf: Optional[nestedvrf.NestedVrf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vrf' }})
    
