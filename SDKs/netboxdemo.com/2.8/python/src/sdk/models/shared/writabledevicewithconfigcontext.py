from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nesteddevice

class WritableDeviceWithConfigContextRackFaceEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"

class WritableDeviceWithConfigContextStatusEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    STAGED = "staged"
    FAILED = "failed"
    INVENTORY = "inventory"
    DECOMMISSIONING = "decommissioning"


@dataclass_json
@dataclass
class WritableDeviceWithConfigContext:
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_tag' }})
    cluster: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    config_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_context' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    device_role: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_role' }})
    device_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    face: Optional[WritableDeviceWithConfigContextRackFaceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'face' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local_context_data' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_device: Optional[nesteddevice.NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_device' }})
    platform: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    primary_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip' }})
    primary_ip4: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip4' }})
    primary_ip6: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip6' }})
    rack: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    site: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[WritableDeviceWithConfigContextStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    vc_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vc_position' }})
    vc_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vc_priority' }})
    virtual_chassis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtual_chassis' }})
    
