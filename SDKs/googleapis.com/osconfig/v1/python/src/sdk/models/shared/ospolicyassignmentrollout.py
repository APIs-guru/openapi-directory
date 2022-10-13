from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fixedorpercent


@dataclass_json
@dataclass
class OsPolicyAssignmentRollout:
    disruption_budget: Optional[fixedorpercent.FixedOrPercent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptionBudget' }})
    min_wait_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minWaitDuration' }})
    
