from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddItemIdsListPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddItemIdsListRequest:
    path_params: AddItemIdsListPathParams = field(default=None)
    request: List[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddItemIdsListResponse:
    content_type: str = field(default=None)
    response_list_resource: Optional[shared.ResponseListResource] = field(default=None)
    status_code: int = field(default=None)
    
