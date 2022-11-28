from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddItemIdsListPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddItemIdsListRequest:
    path_params: AddItemIdsListPathParams = field()
    request: List[str] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddItemIdsListResponse:
    content_type: str = field()
    status_code: int = field()
    response_list_resource: Optional[shared.ResponseListResource] = field(default=None)
    
