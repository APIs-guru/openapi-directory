from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtimeguestosfeature
from . import localdiskinitializeparams


@dataclass_json
@dataclass
class LocalDisk:
    auto_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoDelete' }})
    boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boot' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    guest_os_features: Optional[List[runtimeguestosfeature.RuntimeGuestOsFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestOsFeatures' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    initialize_params: Optional[localdiskinitializeparams.LocalDiskInitializeParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializeParams' }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    licenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenses' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
