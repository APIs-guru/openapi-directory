from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CalendarAuthViewModel:
    calendar_auth_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarAuthUrl') }})
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarId') }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectName') }})
    
