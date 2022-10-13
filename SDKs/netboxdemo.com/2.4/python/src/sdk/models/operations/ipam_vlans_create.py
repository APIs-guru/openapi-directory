from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlansCreateRequest:
    request: shared.WritableVlan = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlansCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vlan: Optional[shared.Vlan] = field(default=None)
    
