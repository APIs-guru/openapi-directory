from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetNodePoolAutoscalingRequest:
    r"""SetNodePoolAutoscalingRequest
    SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
    """
    
    autoscaling: Optional[NodePoolAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscaling') }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
