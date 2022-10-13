from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkerResource:
    cpu: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    max_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCount' }})
    memory_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryGb' }})
    min_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minCount' }})
    storage_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageGb' }})
    
