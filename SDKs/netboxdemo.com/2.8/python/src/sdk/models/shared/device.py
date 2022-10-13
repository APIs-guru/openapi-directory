from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nestedcluster
from . import nesteddevicerole
from . import nesteddevicetype
from . import nesteddevice
from . import nestedplatform
from . import nestedipaddress
from . import nestedipaddress
from . import nestedipaddress
from . import nestedrack
from . import nestedsite
from . import nestedtenant
from . import nestedvirtualchassis

class DeviceFaceLabelEnum(str, Enum):
    FRONT = "Front"
    REAR = "Rear"

class DeviceFaceValueEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"


@dataclass_json
@dataclass
class DeviceFaceFace:
    label: DeviceFaceLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: DeviceFaceValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class DeviceStatusLabelEnum(str, Enum):
    OFFLINE = "Offline"
    ACTIVE = "Active"
    PLANNED = "Planned"
    STAGED = "Staged"
    FAILED = "Failed"
    INVENTORY = "Inventory"
    DECOMMISSIONING = "Decommissioning"

class DeviceStatusValueEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    STAGED = "staged"
    FAILED = "failed"
    INVENTORY = "inventory"
    DECOMMISSIONING = "decommissioning"


@dataclass_json
@dataclass
class DeviceStatusStatus:
    label: DeviceStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: DeviceStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Device:
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_tag' }})
    cluster: Optional[nestedcluster.NestedCluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    device_role: nesteddevicerole.NestedDeviceRole = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_role' }})
    device_type: nesteddevicetype.NestedDeviceType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    face: Optional[DeviceFaceFace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'face' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local_context_data' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_device: Optional[nesteddevice.NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_device' }})
    platform: Optional[nestedplatform.NestedPlatform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    primary_ip: Optional[nestedipaddress.NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip' }})
    primary_ip4: Optional[nestedipaddress.NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip4' }})
    primary_ip6: Optional[nestedipaddress.NestedIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip6' }})
    rack: Optional[nestedrack.NestedRack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    site: nestedsite.NestedSite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[DeviceStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    vc_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vc_position' }})
    vc_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vc_priority' }})
    virtual_chassis: Optional[nestedvirtualchassis.NestedVirtualChassis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtual_chassis' }})
    
