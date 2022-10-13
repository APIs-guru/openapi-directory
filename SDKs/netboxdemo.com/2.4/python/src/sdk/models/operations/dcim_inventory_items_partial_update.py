from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInventoryItemsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInventoryItemsPartialUpdateRequest:
    path_params: DcimInventoryItemsPartialUpdatePathParams = field(default=None)
    request: shared.WritableInventoryItem = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInventoryItemsPartialUpdateResponse:
    content_type: str = field(default=None)
    inventory_item: Optional[shared.InventoryItem] = field(default=None)
    status_code: int = field(default=None)
    
