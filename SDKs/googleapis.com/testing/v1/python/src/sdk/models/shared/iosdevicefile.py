from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filereference


@dataclass_json
@dataclass
class IosDeviceFile:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    content: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    device_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePath' }})
    
