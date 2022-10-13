from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableDeviceType:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_count' }})
    interface_ordering: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_ordering' }})
    is_console_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_console_server' }})
    is_full_depth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_full_depth' }})
    is_network_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_network_device' }})
    is_pdu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_pdu' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    manufacturer: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    part_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'part_number' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    subdevice_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdevice_role' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'u_height' }})
    
