from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInventoryItemsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInventoryItemsUpdateRequest:
    path_params: DcimInventoryItemsUpdatePathParams = field(default=None)
    request: shared.WritableInventoryItem = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInventoryItemsUpdateResponse:
    content_type: str = field(default=None)
    inventory_item: Optional[shared.InventoryItem] = field(default=None)
    status_code: int = field(default=None)
    
