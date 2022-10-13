from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortTemplatesUpdateRequest:
    path_params: DcimConsoleServerPortTemplatesUpdatePathParams = field(default=None)
    request: shared.WritableConsoleServerPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortTemplatesUpdateResponse:
    console_server_port_template: Optional[shared.ConsoleServerPortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
