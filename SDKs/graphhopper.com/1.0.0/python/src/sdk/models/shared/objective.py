from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObjectiveTypeEnum(str, Enum):
    MIN = "min"
    MIN_MAX = "min-max"

class ObjectiveValueEnum(str, Enum):
    COMPLETION_TIME = "completion_time"
    TRANSPORT_TIME = "transport_time"
    VEHICLES = "vehicles"
    ACTIVITIES = "activities"


@dataclass_json
@dataclass
class Objective:
    type: ObjectiveTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: ObjectiveValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
