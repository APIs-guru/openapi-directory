from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ipaddressinterface
from . import nestedipaddress
from . import nestedipaddress
from . import nestedtenant
from . import nestedvrf

class IPAddressFamilyLabelEnum(str, Enum):
    I_PV4 = "IPv4"
    I_PV6 = "IPv6"


@dataclass_json
@dataclass
class IPAddressFamilyFamily:
    label: IPAddressFamilyLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class IPAddressRoleLabelEnum(str, Enum):
    LOOPBACK = "Loopback"
    SECONDARY = "Secondary"
    ANYCAST = "Anycast"
    VIP = "VIP"
    VRRP = "VRRP"
    HSRP = "HSRP"
    GLBP = "GLBP"
    CARP = "CARP"

class IPAddressRoleValueEnum(str, Enum):
    LOOPBACK = "loopback"
    SECONDARY = "secondary"
    ANYCAST = "anycast"
    VIP = "vip"
    VRRP = "vrrp"
    HSRP = "hsrp"
    GLBP = "glbp"
    CARP = "carp"


@dataclass_json
@dataclass
class IPAddressRoleRole:
    label: IPAddressRoleLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: IPAddressRoleValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class IPAddressStatusLabelEnum(str, Enum):
    ACTIVE = "Active"
    RESERVED = "Reserved"
    DEPRECATED = "Deprecated"
    DHCP = "DHCP"

class IPAddressStatusValueEnum(str, Enum):
    ACTIVE = "active"
    RESERVED = "reserved"
    DEPRECATED = "deprecated"
    DHCP = "dhcp"


@dataclass_json
@dataclass
class IPAddressStatusStatus:
    label: IPAddressStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: IPAddressStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class IPAddress:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_name' }})
    family: Optional[IPAddressFamilyFamily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
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
    
