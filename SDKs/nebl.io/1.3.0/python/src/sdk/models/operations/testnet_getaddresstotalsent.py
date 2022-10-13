from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TestnetGetAddressTotalSentPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressTotalSentRequest:
    path_params: TestnetGetAddressTotalSentPathParams = field(default=None)
    

@dataclass
class TestnetGetAddressTotalSentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_total_sent_response: Optional[float] = field(default=None)
    
