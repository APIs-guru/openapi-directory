from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortsReadRequest:
    path_params: DcimConsoleServerPortsReadPathParams = field()
    

@dataclass
class DcimConsoleServerPortsReadResponse:
    content_type: str = field()
    status_code: int = field()
    console_server_port: Optional[shared.ConsoleServerPort] = field(default=None)
    
