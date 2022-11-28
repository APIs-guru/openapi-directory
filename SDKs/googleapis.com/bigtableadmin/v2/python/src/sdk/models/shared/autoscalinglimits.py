from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoscalingLimits:
    r"""AutoscalingLimits
    Limits for the number of nodes a Cluster can autoscale up/down to.
    """
    
    max_serve_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxServeNodes') }})
    min_serve_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minServeNodes') }})
    
