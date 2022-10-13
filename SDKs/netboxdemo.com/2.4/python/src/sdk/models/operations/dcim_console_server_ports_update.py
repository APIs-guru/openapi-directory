from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortsUpdateRequest:
    path_params: DcimConsoleServerPortsUpdatePathParams = field(default=None)
    request: shared.WritableConsoleServerPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortsUpdateResponse:
    console_server_port: Optional[shared.ConsoleServerPort] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
