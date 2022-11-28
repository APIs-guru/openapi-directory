from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAddressTotalReceivedPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressTotalReceivedRequest:
    path_params: GetAddressTotalReceivedPathParams = field()
    

@dataclass
class GetAddressTotalReceivedResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_total_received_response: Optional[float] = field(default=None)
    
