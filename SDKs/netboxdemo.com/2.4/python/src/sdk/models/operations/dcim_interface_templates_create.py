from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceTemplatesCreateRequest:
    request: shared.WritableInterfaceTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceTemplatesCreateResponse:
    content_type: str = field(default=None)
    interface_template: Optional[shared.InterfaceTemplate] = field(default=None)
    status_code: int = field(default=None)
    
