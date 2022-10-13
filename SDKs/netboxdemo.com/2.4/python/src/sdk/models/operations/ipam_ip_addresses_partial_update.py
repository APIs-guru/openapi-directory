from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamIPAddressesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamIPAddressesPartialUpdateRequest:
    path_params: IpamIPAddressesPartialUpdatePathParams = field(default=None)
    request: shared.WritableIPAddress = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamIPAddressesPartialUpdateResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    
