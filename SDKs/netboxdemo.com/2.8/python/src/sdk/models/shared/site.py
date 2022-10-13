from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedregion
from . import nestedtenant

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
class SiteStatusStatus:
    label: SiteStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: SiteStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Site:
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    circuit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit_count' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_email' }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_name' }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_phone' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    physical_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physical_address' }})
    prefix_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix_count' }})
    rack_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack_count' }})
    region: Optional[nestedregion.NestedRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    shipping_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    status: Optional[SiteStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_zone' }})
    virtualmachine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualmachine_count' }})
    vlan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_count' }})
    
