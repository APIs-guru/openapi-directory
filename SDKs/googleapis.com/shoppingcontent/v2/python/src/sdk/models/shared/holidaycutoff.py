from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HolidayCutoff:
    deadline_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadlineDate') }})
    deadline_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadlineHour') }})
    deadline_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadlineTimezone') }})
    holiday_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holidayId') }})
    visible_from_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleFromDate') }})
    
