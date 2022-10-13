from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import condition


@dataclass_json
@dataclass
class ZoneBoundary:
    condition: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    custom_evaluation_trigger_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customEvaluationTriggerId' }})
    
