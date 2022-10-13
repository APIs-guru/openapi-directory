from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsPartialUpdateRequest:
    path_params: DcimFrontPortsPartialUpdatePathParams = field(default=None)
    request: shared.WritableFrontPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortsPartialUpdateResponse:
    content_type: str = field(default=None)
    front_port: Optional[shared.FrontPort] = field(default=None)
    status_code: int = field(default=None)
    
