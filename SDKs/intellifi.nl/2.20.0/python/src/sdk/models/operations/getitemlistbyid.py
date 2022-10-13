from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetItemListByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemListByIDRequest:
    path_params: GetItemListByIDPathParams = field(default=None)
    

@dataclass
class GetItemListByIDResponse:
    content_type: str = field(default=None)
    item_list: Optional[shared.ItemList] = field(default=None)
    status_code: int = field(default=None)
    
