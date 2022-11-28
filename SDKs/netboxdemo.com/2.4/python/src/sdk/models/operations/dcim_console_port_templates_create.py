from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesCreateRequest:
    request: shared.WritableConsolePortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    
