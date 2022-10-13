from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CalendarAuthViewModel:
    calendar_auth_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarAuthUrl' }})
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    
