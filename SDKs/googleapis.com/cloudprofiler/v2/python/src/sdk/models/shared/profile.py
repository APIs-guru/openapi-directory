from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class ProfileInput:
    r"""ProfileInput
    Profile resource.
    """
    
    deployment: Optional[Deployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    profile_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileBytes') }})
    profile_type: Optional[ProfileProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileType') }})
    

@dataclass_json
@dataclass
class Profile:
    r"""Profile
    Profile resource.
    """
    
    deployment: Optional[Deployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileBytes') }})
    profile_type: Optional[ProfileProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileType') }})
    
