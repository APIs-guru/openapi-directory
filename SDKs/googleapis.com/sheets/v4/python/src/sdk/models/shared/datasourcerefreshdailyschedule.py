from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceRefreshDailySchedule:
    r"""DataSourceRefreshDailySchedule
    A schedule for data to refresh every day in a given time interval.
    """
    
    start_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
