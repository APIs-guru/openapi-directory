from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsUpdateRequest:
    path_params: ExtrasConfigContextsUpdatePathParams = field(default=None)
    request: shared.WritableConfigContext = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasConfigContextsUpdateResponse:
    config_context: Optional[shared.ConfigContext] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
