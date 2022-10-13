from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationCycle:
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressPercent' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
