from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BasicYarnAutoscalingConfig:
    graceful_decommission_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gracefulDecommissionTimeout' }})
    scale_down_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleDownFactor' }})
    scale_down_min_worker_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleDownMinWorkerFraction' }})
    scale_up_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleUpFactor' }})
    scale_up_min_worker_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleUpMinWorkerFraction' }})
    
