from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BasicAutoscalingAlgorithm:
    r"""BasicAutoscalingAlgorithm
    Basic algorithm for autoscaling.
    """
    
    cooldown_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cooldownPeriod') }})
    spark_standalone_config: Optional[SparkStandaloneAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkStandaloneConfig') }})
    yarn_config: Optional[BasicYarnAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yarnConfig') }})
    
