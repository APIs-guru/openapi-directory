from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRolesCreateRequest:
    request: shared.RoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRolesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    role: Optional[shared.Role] = field(default=None)
    
