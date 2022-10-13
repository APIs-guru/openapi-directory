from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAddressTotalSentPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressTotalSentRequest:
    path_params: GetAddressTotalSentPathParams = field(default=None)
    

@dataclass
class GetAddressTotalSentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_total_sent_response: Optional[float] = field(default=None)
    
