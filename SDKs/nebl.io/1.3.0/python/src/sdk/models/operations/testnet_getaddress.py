from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetAddressPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressRequest:
    path_params: TestnetGetAddressPathParams = field()
    

@dataclass
class TestnetGetAddressResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_response: Optional[shared.GetAddressResponse] = field(default=None)
    
