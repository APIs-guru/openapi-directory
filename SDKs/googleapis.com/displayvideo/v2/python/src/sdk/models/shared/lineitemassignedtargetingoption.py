from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assignedtargetingoption


@dataclass_json
@dataclass
class LineItemAssignedTargetingOption:
    assigned_targeting_option: Optional[assignedtargetingoption.AssignedTargetingOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedTargetingOption' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    
