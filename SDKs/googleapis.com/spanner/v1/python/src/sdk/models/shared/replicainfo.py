from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReplicaInfoTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    READ_WRITE = "READ_WRITE"
    READ_ONLY = "READ_ONLY"
    WITNESS = "WITNESS"


@dataclass_json
@dataclass
class ReplicaInfo:
    default_leader_location: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLeaderLocation') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    type: Optional[ReplicaInfoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
