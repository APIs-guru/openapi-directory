from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CitationsStylesReadPathParams:
    style_id: str = field(metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CitationsStylesReadRequest:
    path_params: CitationsStylesReadPathParams = field()
    

@dataclass
class CitationsStylesReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
