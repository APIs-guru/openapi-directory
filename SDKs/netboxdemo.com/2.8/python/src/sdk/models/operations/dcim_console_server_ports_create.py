from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortsCreateRequest:
    request: shared.WritableConsoleServerPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    console_server_port: Optional[shared.ConsoleServerPort] = field(default=None)
    
