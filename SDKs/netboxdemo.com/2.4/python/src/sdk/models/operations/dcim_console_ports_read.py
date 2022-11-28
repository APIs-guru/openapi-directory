from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsReadRequest:
    path_params: DcimConsolePortsReadPathParams = field()
    

@dataclass
class DcimConsolePortsReadResponse:
    content_type: str = field()
    status_code: int = field()
    console_port: Optional[shared.ConsolePort] = field(default=None)
    
