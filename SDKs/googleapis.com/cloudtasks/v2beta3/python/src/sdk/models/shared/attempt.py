from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class Attempt:
    dispatch_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchTime' }})
    response_status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseStatus' }})
    response_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTime' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    
