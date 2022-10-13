from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesCreateRequest:
    request: shared.WritableInterface = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfacesCreateResponse:
    content_type: str = field(default=None)
    interface: Optional[shared.Interface] = field(default=None)
    status_code: int = field(default=None)
    
