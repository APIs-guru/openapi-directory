from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSpotSetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    set_id: str = field(default=None, metadata={'path_param': { 'field_name': 'setId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSpotSetRequest:
    path_params: UpdateSpotSetPathParams = field(default=None)
    request: shared.SpotSetUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSpotSetResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
