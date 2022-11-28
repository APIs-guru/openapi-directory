from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RescheduleMaintenanceRequestRescheduleTypeEnum(str, Enum):
    RESCHEDULE_TYPE_UNSPECIFIED = "RESCHEDULE_TYPE_UNSPECIFIED"
    IMMEDIATE = "IMMEDIATE"
    NEXT_AVAILABLE_WINDOW = "NEXT_AVAILABLE_WINDOW"
    SPECIFIC_TIME = "SPECIFIC_TIME"


@dataclass_json
@dataclass
class RescheduleMaintenanceRequest:
    r"""RescheduleMaintenanceRequest
    Request for RescheduleMaintenance.
    """
    
    reschedule_type: Optional[RescheduleMaintenanceRequestRescheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescheduleType') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    
