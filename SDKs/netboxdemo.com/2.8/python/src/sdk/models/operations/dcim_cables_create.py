from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimCablesCreateRequest:
    request: shared.WritableCable = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimCablesCreateResponse:
    cable: Optional[shared.Cable] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
