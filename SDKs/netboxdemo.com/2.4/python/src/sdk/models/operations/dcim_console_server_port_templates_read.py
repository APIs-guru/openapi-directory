from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortTemplatesReadRequest:
    path_params: DcimConsoleServerPortTemplatesReadPathParams = field()
    

@dataclass
class DcimConsoleServerPortTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    console_server_port_template: Optional[shared.ConsoleServerPortTemplate] = field(default=None)
    
