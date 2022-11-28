from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRacksCreateRequest:
    request: shared.WritableRackInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRacksCreateResponse:
    content_type: str = field()
    status_code: int = field()
    rack: Optional[shared.Rack] = field(default=None)
    
