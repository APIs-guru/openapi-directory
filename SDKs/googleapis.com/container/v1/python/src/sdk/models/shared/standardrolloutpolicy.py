from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StandardRolloutPolicy:
    batch_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchNodeCount' }})
    batch_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchPercentage' }})
    batch_soak_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchSoakDuration' }})
    
