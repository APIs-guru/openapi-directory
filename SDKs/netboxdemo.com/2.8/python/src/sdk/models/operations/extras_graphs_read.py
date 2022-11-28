from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasGraphsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasGraphsReadRequest:
    path_params: ExtrasGraphsReadPathParams = field()
    

@dataclass
class ExtrasGraphsReadResponse:
    content_type: str = field()
    status_code: int = field()
    graph: Optional[shared.Graph] = field(default=None)
    
