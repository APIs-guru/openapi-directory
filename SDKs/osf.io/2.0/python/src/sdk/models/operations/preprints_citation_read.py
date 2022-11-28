from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprintsCitationReadPathParams:
    preprint_id: str = field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    style_id: str = field(metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsCitationReadRequest:
    path_params: PreprintsCitationReadPathParams = field()
    

@dataclass
class PreprintsCitationReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
