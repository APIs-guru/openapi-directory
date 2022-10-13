from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRolesCreateRequest:
    request: shared.Role = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRolesCreateResponse:
    content_type: str = field(default=None)
    role: Optional[shared.Role] = field(default=None)
    status_code: int = field(default=None)
    
