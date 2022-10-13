from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsProvidersPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsProvidersPartialUpdateRequest:
    path_params: CircuitsProvidersPartialUpdatePathParams = field(default=None)
    request: shared.Provider = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsProvidersPartialUpdateResponse:
    content_type: str = field(default=None)
    provider: Optional[shared.Provider] = field(default=None)
    status_code: int = field(default=None)
    
