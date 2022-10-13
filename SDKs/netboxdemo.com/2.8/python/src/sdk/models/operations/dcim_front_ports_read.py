from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsReadRequest:
    path_params: DcimFrontPortsReadPathParams = field(default=None)
    

@dataclass
class DcimFrontPortsReadResponse:
    content_type: str = field(default=None)
    front_port: Optional[shared.FrontPort] = field(default=None)
    status_code: int = field(default=None)
    
