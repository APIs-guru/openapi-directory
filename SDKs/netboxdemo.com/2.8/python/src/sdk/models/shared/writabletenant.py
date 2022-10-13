from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableTenant:
    circuit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit_count' }})
    cluster_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_count' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ipaddress_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipaddress_count' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prefix_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix_count' }})
    rack_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack_count' }})
    site_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_count' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    virtualmachine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualmachine_count' }})
    vlan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_count' }})
    vrf_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vrf_count' }})
    
