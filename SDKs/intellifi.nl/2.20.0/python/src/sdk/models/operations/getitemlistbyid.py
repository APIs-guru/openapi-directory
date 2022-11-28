from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemListByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemListByIDRequest:
    path_params: GetItemListByIDPathParams = field()
    

@dataclass
class GetItemListByIDResponse:
    content_type: str = field()
    status_code: int = field()
    item_list: Optional[shared.ItemList] = field(default=None)
    
