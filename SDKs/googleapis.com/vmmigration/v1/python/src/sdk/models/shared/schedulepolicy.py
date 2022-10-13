from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SchedulePolicy:
    idle_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleDuration' }})
    skip_os_adaptation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipOsAdaptation' }})
    
