from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamIPAddressesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamIPAddressesReadRequest:
    path_params: IpamIPAddressesReadPathParams = field()
    

@dataclass
class IpamIPAddressesReadResponse:
    content_type: str = field()
    status_code: int = field()
    ip_address: Optional[shared.IPAddress] = field(default=None)
    
