from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRacksCreateRequest:
    request: shared.WritableRack = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRacksCreateResponse:
    content_type: str = field(default=None)
    rack: Optional[shared.Rack] = field(default=None)
    status_code: int = field(default=None)
    
