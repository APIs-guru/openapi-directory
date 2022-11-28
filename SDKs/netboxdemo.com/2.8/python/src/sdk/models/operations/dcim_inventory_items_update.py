from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInventoryItemsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInventoryItemsUpdateRequest:
    path_params: DcimInventoryItemsUpdatePathParams = field()
    request: shared.WritableInventoryItemInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInventoryItemsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    inventory_item: Optional[shared.InventoryItem] = field(default=None)
    
