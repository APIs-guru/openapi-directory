from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRolesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRolesPartialUpdateRequest:
    path_params: IpamRolesPartialUpdatePathParams = field(default=None)
    request: shared.Role = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRolesPartialUpdateResponse:
    content_type: str = field(default=None)
    role: Optional[shared.Role] = field(default=None)
    status_code: int = field(default=None)
    
