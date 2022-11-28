from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepeatViewModel:
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    month_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthDay') }})
    month_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthType') }})
    weekdays: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekdays') }})
    
