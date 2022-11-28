from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsReadRequest:
    path_params: DcimFrontPortsReadPathParams = field()
    

@dataclass
class DcimFrontPortsReadResponse:
    content_type: str = field()
    status_code: int = field()
    front_port: Optional[shared.FrontPort] = field(default=None)
    
