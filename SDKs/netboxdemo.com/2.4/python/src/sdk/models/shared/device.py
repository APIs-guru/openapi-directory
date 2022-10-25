from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import nestedcluster
from . import nesteddevicerole
from . import nesteddevicetype
from . import nestedplatform
from . import deviceipaddress
from . import deviceipaddress
from . import deviceipaddress
from . import nestedrack
from . import nestedsite
from . import nestedtenant
from . import devicevirtualchassis


@dataclass_json
@dataclass
class DeviceFace:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class DeviceStatus:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

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
    face: Optional[DeviceFace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'face' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local_context_data' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_device' }})
    platform: Optional[nestedplatform.NestedPlatform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    primary_ip: Optional[deviceipaddress.DeviceIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip' }})
    primary_ip4: Optional[deviceipaddress.DeviceIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip4' }})
    primary_ip6: Optional[deviceipaddress.DeviceIPAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_ip6' }})
    rack: Optional[nestedrack.NestedRack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    site: nestedsite.NestedSite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[DeviceStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    vc_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vc_position' }})
    vc_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vc_priority' }})
    virtual_chassis: Optional[devicevirtualchassis.DeviceVirtualChassis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtual_chassis' }})
    
