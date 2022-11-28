from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVrfsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVrfsReadRequest:
    path_params: IpamVrfsReadPathParams = field()
    

@dataclass
class IpamVrfsReadResponse:
    content_type: str = field()
    status_code: int = field()
    vrf: Optional[shared.Vrf] = field(default=None)
    
