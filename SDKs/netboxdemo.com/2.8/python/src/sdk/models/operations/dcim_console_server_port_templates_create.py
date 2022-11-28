from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsoleServerPortTemplatesCreateRequest:
    request: shared.WritableConsoleServerPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsoleServerPortTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    console_server_port_template: Optional[shared.ConsoleServerPortTemplate] = field(default=None)
    
