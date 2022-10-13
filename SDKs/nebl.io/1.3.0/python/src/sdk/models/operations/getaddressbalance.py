from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAddressBalancePathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressBalanceRequest:
    path_params: GetAddressBalancePathParams = field(default=None)
    

@dataclass
class GetAddressBalanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_balance_response: Optional[float] = field(default=None)
    
