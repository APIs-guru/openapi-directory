from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsCreateRequest:
    request: shared.WritableFrontPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    front_port: Optional[shared.FrontPort] = field(default=None)
    
