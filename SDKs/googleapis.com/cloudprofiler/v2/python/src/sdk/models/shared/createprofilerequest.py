from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""CreateProfileRequest
    CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected. 
    """
    
    deployment: Optional[Deployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    profile_type: Optional[List[CreateProfileRequestProfileTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileType') }})
    
