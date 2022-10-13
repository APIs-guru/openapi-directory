from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamIPAddressesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamIPAddressesReadRequest:
    path_params: IpamIPAddressesReadPathParams = field(default=None)
    

@dataclass
class IpamIPAddressesReadResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    
