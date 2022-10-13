from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlansReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlansReadRequest:
    path_params: IpamVlansReadPathParams = field(default=None)
    

@dataclass
class IpamVlansReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vlan: Optional[shared.Vlan] = field(default=None)
    
