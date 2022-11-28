from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAddressUnconfirmedBalancePathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressUnconfirmedBalanceRequest:
    path_params: GetAddressUnconfirmedBalancePathParams = field()
    

@dataclass
class GetAddressUnconfirmedBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_unconfirmed_balance_response: Optional[float] = field(default=None)
    
