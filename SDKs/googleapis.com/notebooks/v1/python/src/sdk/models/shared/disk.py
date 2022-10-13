from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guestosfeature


@dataclass_json
@dataclass
class Disk:
    auto_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoDelete' }})
    boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boot' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    guest_os_features: Optional[List[guestosfeature.GuestOsFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestOsFeatures' }})
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    licenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenses' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
