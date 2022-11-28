from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddSpotSetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddSpotSetRequest:
    path_params: AddSpotSetPathParams = field()
    request: shared.SpotSetCreateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddSpotSetResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
