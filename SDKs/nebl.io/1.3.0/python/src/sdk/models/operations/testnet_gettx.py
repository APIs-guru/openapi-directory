from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTxPathParams:
    txid: str = field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTxRequest:
    path_params: TestnetGetTxPathParams = field()
    

@dataclass
class TestnetGetTxResponse:
    content_type: str = field()
    status_code: int = field()
    get_tx_response: Optional[shared.GetTxResponse] = field(default=None)
    
