from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BusinessHoursInputModel:
    fri: Optional[BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri') }})
    mon: Optional[BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon') }})
    sat: Optional[BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat') }})
    sun: Optional[BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun') }})
    thu: Optional[BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu') }})
    tue: Optional[BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue') }})
    wed: Optional[BusinessHourInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed') }})
    
