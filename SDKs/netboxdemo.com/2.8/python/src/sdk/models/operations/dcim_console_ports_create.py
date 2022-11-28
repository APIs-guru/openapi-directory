from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortsCreateRequest:
    request: shared.WritableConsolePortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    console_port: Optional[shared.ConsolePort] = field(default=None)
    
