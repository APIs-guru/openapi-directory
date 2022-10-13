from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortTemplatesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortTemplatesPartialUpdateRequest:
    path_params: DcimFrontPortTemplatesPartialUpdatePathParams = field(default=None)
    request: shared.WritableFrontPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortTemplatesPartialUpdateResponse:
    content_type: str = field(default=None)
    front_port_template: Optional[shared.FrontPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    
