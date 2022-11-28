from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInventoryItemsCreateRequest:
    request: shared.WritableInventoryItemInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInventoryItemsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    inventory_item: Optional[shared.InventoryItem] = field(default=None)
    
