from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sparkstandaloneautoscalingconfig
from . import basicyarnautoscalingconfig


@dataclass_json
@dataclass
class BasicAutoscalingAlgorithm:
    cooldown_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cooldownPeriod' }})
    spark_standalone_config: Optional[sparkstandaloneautoscalingconfig.SparkStandaloneAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkStandaloneConfig' }})
    yarn_config: Optional[basicyarnautoscalingconfig.BasicYarnAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yarnConfig' }})
    
