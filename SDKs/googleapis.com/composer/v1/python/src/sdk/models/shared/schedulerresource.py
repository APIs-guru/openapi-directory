from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SchedulerResource:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cpu: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    memory_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryGb' }})
    storage_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageGb' }})
    
