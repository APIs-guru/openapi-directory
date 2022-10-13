from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schedule


@dataclass_json
@dataclass
class ListSchedulesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    schedules: Optional[List[schedule.Schedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedules' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
