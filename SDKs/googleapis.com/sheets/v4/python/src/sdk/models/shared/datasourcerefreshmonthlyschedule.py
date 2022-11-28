from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceRefreshMonthlySchedule:
    r"""DataSourceRefreshMonthlySchedule
    A monthly schedule for data to refresh on specific days in the month in a given time interval.
    """
    
    days_of_month: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysOfMonth') }})
    start_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
