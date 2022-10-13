from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lineitem


@dataclass_json
@dataclass
class BulkUpdateLineItemsRequest:
    line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemIds' }})
    target_line_item: Optional[lineitem.LineItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLineItem' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
