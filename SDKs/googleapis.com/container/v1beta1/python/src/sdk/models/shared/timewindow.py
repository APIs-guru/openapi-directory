from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeWindow:
    r"""TimeWindow
    Represents an arbitrary window of time.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    maintenance_exclusion_options: Optional[MaintenanceExclusionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceExclusionOptions') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
