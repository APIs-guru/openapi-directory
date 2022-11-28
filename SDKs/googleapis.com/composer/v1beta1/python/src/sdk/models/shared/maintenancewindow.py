from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceWindow:
    r"""MaintenanceWindow
    The configuration settings for Cloud Composer maintenance window. The following example: ``` { \"startTime\":\"2019-08-01T01:00:00Z\" \"endTime\":\"2019-08-01T07:00:00Z\" \"recurrence\":\"FREQ=WEEKLY;BYDAY=TU,WE\" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    recurrence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
