from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAddressTotalSentPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressTotalSentRequest:
    path_params: GetAddressTotalSentPathParams = field()
    

@dataclass
class GetAddressTotalSentResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_total_sent_response: Optional[float] = field(default=None)
    
