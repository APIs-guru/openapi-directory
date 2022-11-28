from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSpotListPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSpotListRequest:
    path_params: DeleteSpotListPathParams = field()
    

@dataclass
class DeleteSpotListResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
