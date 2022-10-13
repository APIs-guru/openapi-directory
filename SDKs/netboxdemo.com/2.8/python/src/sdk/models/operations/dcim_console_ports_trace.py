from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsTracePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsTraceRequest:
    path_params: DcimConsolePortsTracePathParams = field(default=None)
    

@dataclass
class DcimConsolePortsTraceResponse:
    console_port: Optional[shared.ConsolePort] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
