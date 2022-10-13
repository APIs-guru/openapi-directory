from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackRolesCreateRequest:
    request: shared.RackRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackRolesCreateResponse:
    content_type: str = field(default=None)
    rack_role: Optional[shared.RackRole] = field(default=None)
    status_code: int = field(default=None)
    
