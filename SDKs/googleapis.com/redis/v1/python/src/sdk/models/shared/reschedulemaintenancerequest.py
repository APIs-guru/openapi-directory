from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RescheduleMaintenanceRequestRescheduleTypeEnum(str, Enum):
    RESCHEDULE_TYPE_UNSPECIFIED = "RESCHEDULE_TYPE_UNSPECIFIED"
    IMMEDIATE = "IMMEDIATE"
    NEXT_AVAILABLE_WINDOW = "NEXT_AVAILABLE_WINDOW"
    SPECIFIC_TIME = "SPECIFIC_TIME"


@dataclass_json
@dataclass
class RescheduleMaintenanceRequest:
    reschedule_type: Optional[RescheduleMaintenanceRequestRescheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rescheduleType' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    
