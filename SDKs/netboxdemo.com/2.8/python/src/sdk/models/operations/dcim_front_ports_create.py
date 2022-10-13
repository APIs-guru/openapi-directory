from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsCreateRequest:
    request: shared.WritableFrontPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortsCreateResponse:
    content_type: str = field(default=None)
    front_port: Optional[shared.FrontPort] = field(default=None)
    status_code: int = field(default=None)
    
