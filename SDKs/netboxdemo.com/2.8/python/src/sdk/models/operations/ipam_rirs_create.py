from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRirsCreateRequest:
    request: shared.RirInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRirsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    rir: Optional[shared.Rir] = field(default=None)
    
