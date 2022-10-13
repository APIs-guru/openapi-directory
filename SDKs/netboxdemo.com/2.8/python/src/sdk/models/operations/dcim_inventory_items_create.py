from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInventoryItemsCreateRequest:
    request: shared.WritableInventoryItem = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInventoryItemsCreateResponse:
    content_type: str = field(default=None)
    inventory_item: Optional[shared.InventoryItem] = field(default=None)
    status_code: int = field(default=None)
    
