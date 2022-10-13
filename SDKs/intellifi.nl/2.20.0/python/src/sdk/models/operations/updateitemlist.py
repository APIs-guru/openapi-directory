from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateItemListPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemListRequest:
    path_params: UpdateItemListPathParams = field(default=None)
    request: shared.ItemList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateItemListResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
