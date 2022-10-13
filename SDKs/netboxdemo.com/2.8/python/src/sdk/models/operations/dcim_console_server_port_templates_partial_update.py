from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortTemplatesPartialUpdateRequest:
    path_params: DcimConsoleServerPortTemplatesPartialUpdatePathParams = field(default=None)
    request: shared.WritableConsoleServerPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortTemplatesPartialUpdateResponse:
    console_server_port_template: Optional[shared.ConsoleServerPortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
