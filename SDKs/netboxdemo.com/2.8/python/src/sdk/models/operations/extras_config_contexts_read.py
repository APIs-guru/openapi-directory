from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsReadRequest:
    path_params: ExtrasConfigContextsReadPathParams = field()
    

@dataclass
class ExtrasConfigContextsReadResponse:
    content_type: str = field()
    status_code: int = field()
    config_context: Optional[shared.ConfigContext] = field(default=None)
    
