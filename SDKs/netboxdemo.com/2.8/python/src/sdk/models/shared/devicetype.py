from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedmanufacturer

class DeviceTypeSubdeviceRoleLabelEnum(str, Enum):
    PARENT = "Parent"
    CHILD = "Child"

class DeviceTypeSubdeviceRoleValueEnum(str, Enum):
    PARENT = "parent"
    CHILD = "child"


@dataclass_json
@dataclass
class DeviceTypeSubdeviceRoleSubdeviceRole:
    label: DeviceTypeSubdeviceRoleLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: DeviceTypeSubdeviceRoleValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class DeviceType:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    front_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'front_image' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_full_depth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_full_depth' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    manufacturer: nestedmanufacturer.NestedManufacturer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    part_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'part_number' }})
    rear_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rear_image' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    subdevice_role: Optional[DeviceTypeSubdeviceRoleSubdeviceRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdevice_role' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    u_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'u_height' }})
    
