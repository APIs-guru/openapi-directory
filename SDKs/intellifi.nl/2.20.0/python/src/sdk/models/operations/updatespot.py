from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSpotPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSpotRequest:
    path_params: UpdateSpotPathParams = field(default=None)
    request: shared.SpotUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSpotResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
