from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpsCreateRequest:
    request: Optional[shared.IPAddressRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpsCreateResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    
