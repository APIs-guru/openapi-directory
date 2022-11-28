from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInventoryItemsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInventoryItemsPartialUpdateRequest:
    path_params: DcimInventoryItemsPartialUpdatePathParams = field()
    request: shared.WritableInventoryItemInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInventoryItemsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    inventory_item: Optional[shared.InventoryItem] = field(default=None)
    
