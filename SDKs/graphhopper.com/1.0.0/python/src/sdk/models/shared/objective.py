from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

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
    type: ObjectiveTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: ObjectiveValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
