from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesCreateRequest:
    request: shared.WritableConsolePortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortTemplatesCreateResponse:
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
