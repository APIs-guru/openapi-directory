from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1Scheduling:
    max_running_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRunningTime' }})
    max_wait_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWaitTime' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    
