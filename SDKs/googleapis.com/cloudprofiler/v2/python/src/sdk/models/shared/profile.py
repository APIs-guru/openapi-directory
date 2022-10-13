from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deployment

class ProfileProfileTypeEnum(str, Enum):
    PROFILE_TYPE_UNSPECIFIED = "PROFILE_TYPE_UNSPECIFIED"
    CPU = "CPU"
    WALL = "WALL"
    HEAP = "HEAP"
    THREADS = "THREADS"
    CONTENTION = "CONTENTION"
    PEAK_HEAP = "PEAK_HEAP"
    HEAP_ALLOC = "HEAP_ALLOC"


@dataclass_json
@dataclass
class Profile:
    deployment: Optional[deployment.Deployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    profile_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileBytes' }})
    profile_type: Optional[ProfileProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileType' }})
    
