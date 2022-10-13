from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortTemplatesReadRequest:
    path_params: DcimConsoleServerPortTemplatesReadPathParams = field(default=None)
    

@dataclass
class DcimConsoleServerPortTemplatesReadResponse:
    console_server_port_template: Optional[shared.ConsoleServerPortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
