from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimVirtualChassisReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimVirtualChassisReadRequest:
    path_params: DcimVirtualChassisReadPathParams = field(default=None)
    

@dataclass
class DcimVirtualChassisReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_chassis: Optional[shared.VirtualChassis] = field(default=None)
    
