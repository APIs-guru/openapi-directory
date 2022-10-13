from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TestnetGetAddressBalancePathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressBalanceRequest:
    path_params: TestnetGetAddressBalancePathParams = field(default=None)
    

@dataclass
class TestnetGetAddressBalanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_balance_response: Optional[float] = field(default=None)
    
