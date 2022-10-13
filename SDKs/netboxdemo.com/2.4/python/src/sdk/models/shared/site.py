from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import nestedregion
from . import nestedtenant


@dataclass_json
@dataclass
class SiteStatusStatus:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Site:
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_email' }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_name' }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_phone' }})
    count_circuits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_circuits' }})
    count_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_devices' }})
    count_prefixes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_prefixes' }})
    count_racks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_racks' }})
    count_vlans: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_vlans' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    physical_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physical_address' }})
    region: Optional[nestedregion.NestedRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    shipping_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    status: Optional[SiteStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_zone' }})
    
