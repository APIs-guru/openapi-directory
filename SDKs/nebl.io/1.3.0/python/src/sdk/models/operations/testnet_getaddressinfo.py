from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetAddressInfoPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressInfoRequest:
    path_params: TestnetGetAddressInfoPathParams = field()
    

@dataclass
class TestnetGetAddressInfoResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_address_info_response: Optional[shared.GetAddressInfoResponse] = field(default=None)
    
