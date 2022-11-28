from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVrfsCreateRequest:
    request: shared.WritableVrfInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVrfsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    vrf: Optional[shared.Vrf] = field(default=None)
    
