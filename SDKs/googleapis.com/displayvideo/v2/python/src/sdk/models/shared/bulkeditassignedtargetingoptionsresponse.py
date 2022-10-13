from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class BulkEditAssignedTargetingOptionsResponse:
    errors: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    failed_line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedLineItemIds' }})
    updated_line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedLineItemIds' }})
    
