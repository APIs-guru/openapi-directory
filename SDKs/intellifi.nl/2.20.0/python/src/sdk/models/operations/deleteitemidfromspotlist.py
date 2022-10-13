from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeleteItemIDFromSpotListPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemIDFromSpotListRequest:
    path_params: DeleteItemIDFromSpotListPathParams = field(default=None)
    

@dataclass
class DeleteItemIDFromSpotListResponse:
    content_type: str = field(default=None)
    response_list_resource: Optional[shared.ResponseListResource] = field(default=None)
    status_code: int = field(default=None)
    
