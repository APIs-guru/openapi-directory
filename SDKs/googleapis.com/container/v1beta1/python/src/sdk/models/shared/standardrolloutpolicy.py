from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StandardRolloutPolicy:
    r"""StandardRolloutPolicy
    Standard rollout policy is the default policy for blue-green.
    """
    
    batch_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchNodeCount') }})
    batch_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchPercentage') }})
    batch_soak_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSoakDuration') }})
    
