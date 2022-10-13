from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVrfsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVrfsUpdateRequest:
    path_params: IpamVrfsUpdatePathParams = field(default=None)
    request: shared.WritableVrf = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVrfsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vrf: Optional[shared.Vrf] = field(default=None)
    
