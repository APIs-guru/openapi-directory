from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsTracePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsTraceRequest:
    path_params: DcimFrontPortsTracePathParams = field(default=None)
    

@dataclass
class DcimFrontPortsTraceResponse:
    content_type: str = field(default=None)
    front_port: Optional[shared.FrontPort] = field(default=None)
    status_code: int = field(default=None)
    
