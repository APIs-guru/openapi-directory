from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortTemplatesCreateRequest:
    request: shared.WritableFrontPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortTemplatesCreateResponse:
    content_type: str = field(default=None)
    front_port_template: Optional[shared.FrontPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    
