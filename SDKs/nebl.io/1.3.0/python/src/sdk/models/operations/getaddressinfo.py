from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAddressInfoPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressInfoRequest:
    path_params: GetAddressInfoPathParams = field(default=None)
    

@dataclass
class GetAddressInfoResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    get_address_info_response: Optional[shared.GetAddressInfoResponse] = field(default=None)
    
