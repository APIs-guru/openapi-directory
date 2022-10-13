from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamIPAddressesCreateRequest:
    request: shared.WritableIPAddress = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamIPAddressesCreateResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    
