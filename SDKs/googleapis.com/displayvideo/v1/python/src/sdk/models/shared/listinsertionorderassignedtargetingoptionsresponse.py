from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignedtargetingoption


@dataclass_json
@dataclass
class ListInsertionOrderAssignedTargetingOptionsResponse:
    assigned_targeting_options: Optional[List[assignedtargetingoption.AssignedTargetingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedTargetingOptions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
