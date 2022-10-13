from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesUpdateRequest:
    path_params: DcimConsolePortTemplatesUpdatePathParams = field(default=None)
    request: shared.WritableConsolePortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortTemplatesUpdateResponse:
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
