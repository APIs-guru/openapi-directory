from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamIPAddressesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamIPAddressesUpdateRequest:
    path_params: IpamIPAddressesUpdatePathParams = field(default=None)
    request: shared.WritableIPAddress = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamIPAddressesUpdateResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    
