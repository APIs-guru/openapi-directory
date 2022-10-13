from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1ScheduleSpec:
    next_job_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextJobTime' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
