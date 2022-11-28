from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeviceWithConfigContextFaceLabelEnum(str, Enum):
    FRONT = "Front"
    REAR = "Rear"

class DeviceWithConfigContextFaceValueEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"


@dataclass_json
@dataclass
class DeviceWithConfigContextFace:
    label: DeviceWithConfigContextFaceLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: DeviceWithConfigContextFaceValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class DeviceWithConfigContextStatusLabelEnum(str, Enum):
    OFFLINE = "Offline"
    ACTIVE = "Active"
    PLANNED = "Planned"
    STAGED = "Staged"
    FAILED = "Failed"
    INVENTORY = "Inventory"
    DECOMMISSIONING = "Decommissioning"

class DeviceWithConfigContextStatusValueEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    STAGED = "staged"
    FAILED = "failed"
    INVENTORY = "inventory"
    DECOMMISSIONING = "decommissioning"


@dataclass_json
@dataclass
class DeviceWithConfigContextStatus:
    label: DeviceWithConfigContextStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: DeviceWithConfigContextStatusValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class DeviceWithConfigContext:
    device_role: NestedDeviceRole = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_role') }})
    device_type: NestedDeviceType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    site: NestedSite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_tag') }})
    cluster: Optional[NestedCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    config_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_context') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    face: Optional[DeviceWithConfigContextFace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('face') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_context_data') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_device: Optional[NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_device') }})
    platform: Optional[NestedPlatform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    primary_ip: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip') }})
    primary_ip4: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip4') }})
    primary_ip6: Optional[NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip6') }})
    rack: Optional[NestedRack] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    status: Optional[DeviceWithConfigContextStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vc_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vc_position') }})
    vc_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vc_priority') }})
    virtual_chassis: Optional[NestedVirtualChassis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_chassis') }})
    
