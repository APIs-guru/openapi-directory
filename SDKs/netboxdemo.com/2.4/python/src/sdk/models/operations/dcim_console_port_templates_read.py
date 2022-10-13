from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesReadRequest:
    path_params: DcimConsolePortTemplatesReadPathParams = field(default=None)
    

@dataclass
class DcimConsolePortTemplatesReadResponse:
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
