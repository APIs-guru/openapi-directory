from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlansCreateRequest:
    request: shared.WritableVlanInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlansCreateResponse:
    content_type: str = field()
    status_code: int = field()
    vlan: Optional[shared.Vlan] = field(default=None)
    
