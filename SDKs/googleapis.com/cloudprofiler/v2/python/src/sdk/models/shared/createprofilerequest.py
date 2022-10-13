from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deployment

class CreateProfileRequestProfileTypeEnum(str, Enum):
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
class CreateProfileRequest:
    deployment: Optional[deployment.Deployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    profile_type: Optional[List[CreateProfileRequestProfileTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileType' }})
    
