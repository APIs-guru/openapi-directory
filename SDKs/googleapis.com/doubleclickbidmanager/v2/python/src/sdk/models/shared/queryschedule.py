from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QueryScheduleFrequencyEnum(str, Enum):
    FREQUENCY_UNSPECIFIED = "FREQUENCY_UNSPECIFIED"
    ONE_TIME = "ONE_TIME"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    SEMI_MONTHLY = "SEMI_MONTHLY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    YEARLY = "YEARLY"


@dataclass_json
@dataclass
class QuerySchedule:
    r"""QuerySchedule
    Information on when and how frequently to run a query.
    """
    
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    frequency: Optional[QueryScheduleFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    next_run_timezone_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRunTimezoneCode') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
