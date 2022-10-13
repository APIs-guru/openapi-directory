from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRirsCreateRequest:
    request: shared.Rir = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRirsCreateResponse:
    content_type: str = field(default=None)
    rir: Optional[shared.Rir] = field(default=None)
    status_code: int = field(default=None)
    
