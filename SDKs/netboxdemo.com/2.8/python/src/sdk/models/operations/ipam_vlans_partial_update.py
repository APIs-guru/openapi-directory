from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamVlansPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlansPartialUpdateRequest:
    path_params: IpamVlansPartialUpdatePathParams = field(default=None)
    request: shared.WritableVlan = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamVlansPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vlan: Optional[shared.Vlan] = field(default=None)
    
