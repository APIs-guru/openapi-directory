from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TestnetGetAddressUnconfirmedBalancePathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressUnconfirmedBalanceRequest:
    path_params: TestnetGetAddressUnconfirmedBalancePathParams = field(default=None)
    

@dataclass
class TestnetGetAddressUnconfirmedBalanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_unconfirmed_balance_response: Optional[float] = field(default=None)
    
