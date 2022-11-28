from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortTemplatesReadRequest:
    path_params: DcimFrontPortTemplatesReadPathParams = field()
    

@dataclass
class DcimFrontPortTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    front_port_template: Optional[shared.FrontPortTemplate] = field(default=None)
    
