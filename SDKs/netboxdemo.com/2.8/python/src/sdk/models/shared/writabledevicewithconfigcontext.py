from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class WritableDeviceWithConfigContextInput:
    device_role: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_role') }})
    device_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    site: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_tag') }})
    cluster: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    face: Optional[WritableDeviceWithConfigContextRackFaceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('face') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_context_data') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_device: Optional[NestedDeviceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_device') }})
    platform: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    primary_ip4: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip4') }})
    primary_ip6: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip6') }})
    rack: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    status: Optional[WritableDeviceWithConfigContextStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vc_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vc_position') }})
    vc_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vc_priority') }})
    virtual_chassis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_chassis') }})
    
