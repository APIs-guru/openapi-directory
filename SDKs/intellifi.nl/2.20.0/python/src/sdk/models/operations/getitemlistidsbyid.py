from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetItemListIdsByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemListIdsByIDRequest:
    path_params: GetItemListIdsByIDPathParams = field(default=None)
    

@dataclass
class GetItemListIdsByIDResponse:
    content_type: str = field(default=None)
    list_of_item_ids: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
