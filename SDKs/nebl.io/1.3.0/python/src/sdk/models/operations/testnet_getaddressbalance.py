from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TestnetGetAddressBalancePathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressBalanceRequest:
    path_params: TestnetGetAddressBalancePathParams = field()
    

@dataclass
class TestnetGetAddressBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_balance_response: Optional[float] = field(default=None)
    
