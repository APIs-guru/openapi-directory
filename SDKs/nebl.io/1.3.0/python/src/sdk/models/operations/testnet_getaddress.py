from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetAddressPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressRequest:
    path_params: TestnetGetAddressPathParams = field(default=None)
    

@dataclass
class TestnetGetAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_response: Optional[shared.GetAddressResponse] = field(default=None)
    
