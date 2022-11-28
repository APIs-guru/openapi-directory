from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortTemplatesCreateRequest:
    request: shared.WritableFrontPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    front_port_template: Optional[shared.FrontPortTemplate] = field(default=None)
    
