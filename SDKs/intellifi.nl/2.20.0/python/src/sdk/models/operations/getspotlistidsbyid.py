from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetSpotListIdsByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpotListIdsByIDRequest:
    path_params: GetSpotListIdsByIDPathParams = field(default=None)
    

@dataclass
class GetSpotListIdsByIDResponse:
    content_type: str = field(default=None)
    list_of_item_ids: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
