from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoscalingTargets:
    cpu_utilization_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuUtilizationPercent' }})
    storage_utilization_gib_per_node: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageUtilizationGibPerNode' }})
    
