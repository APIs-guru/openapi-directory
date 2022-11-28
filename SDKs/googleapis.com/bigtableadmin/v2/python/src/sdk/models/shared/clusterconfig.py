from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterConfig:
    r"""ClusterConfig
    Configuration for a cluster.
    """
    
    cluster_autoscaling_config: Optional[ClusterAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterAutoscalingConfig') }})
    
