from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVrfsCreateRequest:
    request: shared.WritableVrf = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVrfsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vrf: Optional[shared.Vrf] = field(default=None)
    
