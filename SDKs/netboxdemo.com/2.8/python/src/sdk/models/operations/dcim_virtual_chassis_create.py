from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimVirtualChassisCreateRequest:
    request: shared.WritableVirtualChassisInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimVirtualChassisCreateResponse:
    content_type: str = field()
    status_code: int = field()
    virtual_chassis: Optional[shared.VirtualChassis] = field(default=None)
    
