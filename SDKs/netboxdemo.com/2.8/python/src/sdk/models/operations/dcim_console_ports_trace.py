from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsTracePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsTraceRequest:
    path_params: DcimConsolePortsTracePathParams = field()
    

@dataclass
class DcimConsolePortsTraceResponse:
    content_type: str = field()
    status_code: int = field()
    console_port: Optional[shared.ConsolePort] = field(default=None)
    
