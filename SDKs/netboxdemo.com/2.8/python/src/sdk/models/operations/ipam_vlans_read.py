from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlansReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlansReadRequest:
    path_params: IpamVlansReadPathParams = field()
    

@dataclass
class IpamVlansReadResponse:
    content_type: str = field()
    status_code: int = field()
    vlan: Optional[shared.Vlan] = field(default=None)
    
