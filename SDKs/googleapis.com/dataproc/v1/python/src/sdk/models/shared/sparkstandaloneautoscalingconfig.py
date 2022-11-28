from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SparkStandaloneAutoscalingConfig:
    r"""SparkStandaloneAutoscalingConfig
    Basic autoscaling configurations for Spark Standalone.
    """
    
    graceful_decommission_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracefulDecommissionTimeout') }})
    scale_down_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleDownFactor') }})
    scale_down_min_worker_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleDownMinWorkerFraction') }})
    scale_up_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleUpFactor') }})
    scale_up_min_worker_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleUpMinWorkerFraction') }})
    
