from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyAssignmentRollout:
    r"""OsPolicyAssignmentRollout
    Message to configure the rollout at the zonal level for the OS policy assignment.
    """
    
    disruption_budget: Optional[FixedOrPercent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptionBudget') }})
    min_wait_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWaitDuration') }})
    
