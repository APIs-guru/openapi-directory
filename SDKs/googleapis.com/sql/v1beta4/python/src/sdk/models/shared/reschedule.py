from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RescheduleRescheduleTypeEnum(str, Enum):
    RESCHEDULE_TYPE_UNSPECIFIED = "RESCHEDULE_TYPE_UNSPECIFIED"
    IMMEDIATE = "IMMEDIATE"
    NEXT_AVAILABLE_WINDOW = "NEXT_AVAILABLE_WINDOW"
    SPECIFIC_TIME = "SPECIFIC_TIME"


@dataclass_json
@dataclass
class Reschedule:
    reschedule_type: Optional[RescheduleRescheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescheduleType') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    
