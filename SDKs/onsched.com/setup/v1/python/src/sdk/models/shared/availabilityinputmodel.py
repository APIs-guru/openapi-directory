from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AvailabilityInputModel:
    fri: Optional[WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri') }})
    mon: Optional[WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon') }})
    sat: Optional[WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat') }})
    sun: Optional[WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun') }})
    thu: Optional[WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu') }})
    tue: Optional[WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue') }})
    wed: Optional[WeekDayInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed') }})
    
