from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TestnetGetAddressTotalReceivedPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressTotalReceivedRequest:
    path_params: TestnetGetAddressTotalReceivedPathParams = field(default=None)
    

@dataclass
class TestnetGetAddressTotalReceivedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_total_received_response: Optional[float] = field(default=None)
    
