from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasGraphsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasGraphsReadRequest:
    path_params: ExtrasGraphsReadPathParams = field(default=None)
    

@dataclass
class ExtrasGraphsReadResponse:
    content_type: str = field(default=None)
    graph: Optional[shared.Graph] = field(default=None)
    status_code: int = field(default=None)
    
