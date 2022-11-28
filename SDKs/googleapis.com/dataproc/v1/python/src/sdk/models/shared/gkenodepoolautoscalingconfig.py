from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GkeNodePoolAutoscalingConfig:
    r"""GkeNodePoolAutoscalingConfig
    GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
    """
    
    max_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNodeCount') }})
    min_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNodeCount') }})
    
