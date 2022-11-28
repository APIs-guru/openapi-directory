from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamIPAddressesCreateRequest:
    request: shared.WritableIPAddressInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamIPAddressesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    ip_address: Optional[shared.IPAddress] = field(default=None)
    
