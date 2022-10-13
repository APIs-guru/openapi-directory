from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsUpdateRequest:
    path_params: DcimFrontPortsUpdatePathParams = field(default=None)
    request: shared.WritableFrontPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortsUpdateResponse:
    content_type: str = field(default=None)
    front_port: Optional[shared.FrontPort] = field(default=None)
    status_code: int = field(default=None)
    
