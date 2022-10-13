from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsReadRequest:
    path_params: ExtrasConfigContextsReadPathParams = field(default=None)
    

@dataclass
class ExtrasConfigContextsReadResponse:
    config_context: Optional[shared.ConfigContext] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
