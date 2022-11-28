from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddItemIdsSpotListPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddItemIdsSpotListRequest:
    path_params: AddItemIdsSpotListPathParams = field()
    request: List[str] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddItemIdsSpotListResponse:
    content_type: str = field()
    status_code: int = field()
    response_list_resource: Optional[shared.ResponseListResource] = field(default=None)
    
