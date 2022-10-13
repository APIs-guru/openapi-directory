from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobScheduling:
    max_failures_per_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFailuresPerHour' }})
    max_failures_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFailuresTotal' }})
    
