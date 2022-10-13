from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInventoryItemsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInventoryItemsReadRequest:
    path_params: DcimInventoryItemsReadPathParams = field(default=None)
    

@dataclass
class DcimInventoryItemsReadResponse:
    content_type: str = field(default=None)
    inventory_item: Optional[shared.InventoryItem] = field(default=None)
    status_code: int = field(default=None)
    
