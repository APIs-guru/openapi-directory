from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeleteItemIDFromItemListPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemIDFromItemListRequest:
    path_params: DeleteItemIDFromItemListPathParams = field(default=None)
    

@dataclass
class DeleteItemIDFromItemListResponse:
    content_type: str = field(default=None)
    response_list_resource: Optional[shared.ResponseListResource] = field(default=None)
    status_code: int = field(default=None)
    
