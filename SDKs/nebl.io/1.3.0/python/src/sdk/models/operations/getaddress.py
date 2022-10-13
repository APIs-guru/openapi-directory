from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAddressPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressRequest:
    path_params: GetAddressPathParams = field(default=None)
    

@dataclass
class GetAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_response: Optional[shared.GetAddressResponse] = field(default=None)
    
