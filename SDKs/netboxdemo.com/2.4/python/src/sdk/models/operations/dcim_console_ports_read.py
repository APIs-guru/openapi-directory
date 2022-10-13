from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsReadRequest:
    path_params: DcimConsolePortsReadPathParams = field(default=None)
    

@dataclass
class DcimConsolePortsReadResponse:
    console_port: Optional[shared.ConsolePort] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
