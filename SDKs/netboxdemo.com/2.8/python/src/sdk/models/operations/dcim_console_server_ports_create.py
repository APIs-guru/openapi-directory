from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortsCreateRequest:
    request: shared.WritableConsoleServerPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortsCreateResponse:
    console_server_port: Optional[shared.ConsoleServerPort] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
