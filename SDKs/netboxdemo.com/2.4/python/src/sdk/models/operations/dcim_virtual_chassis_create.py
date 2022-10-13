from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimVirtualChassisCreateRequest:
    request: shared.WritableVirtualChassis = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimVirtualChassisCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_chassis: Optional[shared.VirtualChassis] = field(default=None)
    
