from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSpotListPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSpotListRequest:
    path_params: UpdateSpotListPathParams = field(default=None)
    request: shared.SpotList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSpotListResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
