from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LocalDiskInitializeParamsDiskTypeEnum(str, Enum):
    DISK_TYPE_UNSPECIFIED = "DISK_TYPE_UNSPECIFIED"
    PD_STANDARD = "PD_STANDARD"
    PD_SSD = "PD_SSD"
    PD_BALANCED = "PD_BALANCED"
    PD_EXTREME = "PD_EXTREME"


@dataclass_json
@dataclass
class LocalDiskInitializeParams:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskName' }})
    disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    disk_type: Optional[LocalDiskInitializeParamsDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    
