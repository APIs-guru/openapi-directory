from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetFaucetQueryParams:
    address: str = field(metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    

@dataclass
class TestnetGetFaucetRequest:
    query_params: TestnetGetFaucetQueryParams = field()
    

@dataclass
class TestnetGetFaucetResponse:
    content_type: str = field()
    status_code: int = field()
    get_faucet_response: Optional[shared.GetFaucetResponse] = field(default=None)
    
