from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lineitemassignedtargetingoption


@dataclass_json
@dataclass
class BulkListAssignedTargetingOptionsResponse:
    line_item_assigned_targeting_options: Optional[List[lineitemassignedtargetingoption.LineItemAssignedTargetingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemAssignedTargetingOptions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
