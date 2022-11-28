from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimCablesCreateRequest:
    request: shared.WritableCableInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimCablesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    cable: Optional[shared.Cable] = field(default=None)
    
