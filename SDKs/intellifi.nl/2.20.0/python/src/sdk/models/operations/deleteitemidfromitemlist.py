from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteItemIDFromItemListPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemIDFromItemListRequest:
    path_params: DeleteItemIDFromItemListPathParams = field()
    

@dataclass
class DeleteItemIDFromItemListResponse:
    content_type: str = field()
    status_code: int = field()
    response_list_resource: Optional[shared.ResponseListResource] = field(default=None)
    
