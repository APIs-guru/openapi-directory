from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsPartialUpdateRequest:
    path_params: ExtrasConfigContextsPartialUpdatePathParams = field(default=None)
    request: shared.WritableConfigContext = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasConfigContextsPartialUpdateResponse:
    config_context: Optional[shared.ConfigContext] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
