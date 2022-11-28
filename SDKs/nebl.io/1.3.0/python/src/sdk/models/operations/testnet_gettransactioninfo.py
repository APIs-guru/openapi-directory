from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTransactionInfoPathParams:
    txid: str = field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTransactionInfoRequest:
    path_params: TestnetGetTransactionInfoPathParams = field()
    

@dataclass
class TestnetGetTransactionInfoResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_transaction_info_response: Optional[shared.GetTransactionInfoResponse] = field(default=None)
    
