from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesCreateRequest:
    request: shared.WritableConsoleServerPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortTemplatesCreateResponse:
    console_server_port_template: Optional[shared.ConsoleServerPortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
