from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortsReadRequest:
    path_params: DcimConsoleServerPortsReadPathParams = field(default=None)
    

@dataclass
class DcimConsoleServerPortsReadResponse:
    console_server_port: Optional[shared.ConsoleServerPort] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
