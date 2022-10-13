from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AttachedDiskModeEnum(str, Enum):
    DISK_MODE_UNSPECIFIED = "DISK_MODE_UNSPECIFIED"
    READ_WRITE = "READ_WRITE"
    READ_ONLY = "READ_ONLY"


@dataclass_json
@dataclass
class AttachedDisk:
    mode: Optional[AttachedDiskModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    source_disk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDisk' }})
    
