from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRolesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRolesReadRequest:
    path_params: IpamRolesReadPathParams = field()
    

@dataclass
class IpamRolesReadResponse:
    content_type: str = field()
    status_code: int = field()
    role: Optional[shared.Role] = field(default=None)
    
