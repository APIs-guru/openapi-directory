from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVrfsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVrfsReadRequest:
    path_params: IpamVrfsReadPathParams = field(default=None)
    

@dataclass
class IpamVrfsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vrf: Optional[shared.Vrf] = field(default=None)
    
