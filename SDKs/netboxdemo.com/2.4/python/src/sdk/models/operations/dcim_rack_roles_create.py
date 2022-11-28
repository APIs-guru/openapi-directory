from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackRolesCreateRequest:
    request: shared.RackRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackRolesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_role: Optional[shared.RackRole] = field(default=None)
    
