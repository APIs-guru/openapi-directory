from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MaintenanceWindowDayOfWeekEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass_json
@dataclass
class MaintenanceWindow:
    r"""MaintenanceWindow
    Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
    """
    
    day_of_week: Optional[MaintenanceWindowDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    hour_of_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourOfDay') }})
    
