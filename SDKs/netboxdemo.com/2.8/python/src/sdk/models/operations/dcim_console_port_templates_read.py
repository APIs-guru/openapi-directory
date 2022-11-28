from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimConsolePortTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesReadRequest:
    path_params: DcimConsolePortTemplatesReadPathParams = field()
    

@dataclass
class DcimConsolePortTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    console_port_template: Optional[shared.ConsolePortTemplate] = field(default=None)
    
