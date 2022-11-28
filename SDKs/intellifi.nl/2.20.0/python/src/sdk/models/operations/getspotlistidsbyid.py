from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetSpotListIdsByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotListIdsByIDRequest:
    path_params: GetSpotListIdsByIDPathParams = field()
    

@dataclass
class GetSpotListIdsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    list_of_item_ids: Optional[List[str]] = field(default=None)
    
