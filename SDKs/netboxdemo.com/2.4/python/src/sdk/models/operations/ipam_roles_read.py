from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRolesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRolesReadRequest:
    path_params: IpamRolesReadPathParams = field(default=None)
    

@dataclass
class IpamRolesReadResponse:
    content_type: str = field(default=None)
    role: Optional[shared.Role] = field(default=None)
    status_code: int = field(default=None)
    
