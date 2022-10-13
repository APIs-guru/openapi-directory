from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryitem


@dataclass_json
@dataclass
class InventoryItemsListResponse:
    inventory_items: Optional[List[inventoryitem.InventoryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryItems' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
