from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimVirtualChassisPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimVirtualChassisPartialUpdateRequest:
    path_params: DcimVirtualChassisPartialUpdatePathParams = field(default=None)
    request: shared.WritableVirtualChassis = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimVirtualChassisPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_chassis: Optional[shared.VirtualChassis] = field(default=None)
    
