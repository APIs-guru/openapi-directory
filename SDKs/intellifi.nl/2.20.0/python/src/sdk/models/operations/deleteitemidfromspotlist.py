from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteItemIDFromSpotListPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemIDFromSpotListRequest:
    path_params: DeleteItemIDFromSpotListPathParams = field()
    

@dataclass
class DeleteItemIDFromSpotListResponse:
    content_type: str = field()
    status_code: int = field()
    response_list_resource: Optional[shared.ResponseListResource] = field(default=None)
    
