from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceTemplatesCreateRequest:
    request: shared.WritableInterfaceTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    interface_template: Optional[shared.InterfaceTemplate] = field(default=None)
    
