from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortTemplatesReadRequest:
    path_params: DcimFrontPortTemplatesReadPathParams = field(default=None)
    

@dataclass
class DcimFrontPortTemplatesReadResponse:
    content_type: str = field(default=None)
    front_port_template: Optional[shared.FrontPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    
