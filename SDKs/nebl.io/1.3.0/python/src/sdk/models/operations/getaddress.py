from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAddressPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressRequest:
    path_params: GetAddressPathParams = field()
    

@dataclass
class GetAddressResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_response: Optional[shared.GetAddressResponse] = field(default=None)
    
