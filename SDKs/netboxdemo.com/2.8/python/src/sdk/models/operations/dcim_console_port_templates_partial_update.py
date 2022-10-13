from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesPartialUpdateRequest:
    path_params: DcimConsolePortTemplatesPartialUpdatePathParams = field(default=None)
    request: shared.WritableConsolePortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimConsolePortTemplatesPartialUpdateResponse:
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
