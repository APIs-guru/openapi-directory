from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clusterautoscalingconfig


@dataclass_json
@dataclass
class ClusterConfig:
    cluster_autoscaling_config: Optional[clusterautoscalingconfig.ClusterAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterAutoscalingConfig' }})
    
