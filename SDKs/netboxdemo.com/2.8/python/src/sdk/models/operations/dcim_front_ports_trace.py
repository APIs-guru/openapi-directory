from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsTracePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsTraceRequest:
    path_params: DcimFrontPortsTracePathParams = field()
    

@dataclass
class DcimFrontPortsTraceResponse:
    content_type: str = field()
    status_code: int = field()
    front_port: Optional[shared.FrontPort] = field(default=None)
    
