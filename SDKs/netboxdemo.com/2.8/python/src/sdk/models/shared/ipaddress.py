from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IPAddressFamilyLabelEnum(str, Enum):
    I_PV4 = "IPv4"
    I_PV6 = "IPv6"


@dataclass_json
@dataclass
class IPAddressFamily:
    label: IPAddressFamilyLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
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
class IPAddressRole:
    label: IPAddressRoleLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: IPAddressRoleValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
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
class IPAddressStatus:
    label: IPAddressStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: IPAddressStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class IPAddress:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_name') }})
    family: Optional[IPAddressFamily] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interface: Optional[IPAddressInterface] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nat_inside: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nat_inside') }})
    nat_outside: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nat_outside') }})
    role: Optional[IPAddressRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    status: Optional[IPAddressStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vrf: Optional[NestedVrf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vrf') }})
    
