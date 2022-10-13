from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Schedule:
    cron_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cronSchedule' }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paused' }})
    
