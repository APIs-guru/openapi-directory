from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetRawTxPathParams:
    txid: str = field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetRawTxRequest:
    path_params: TestnetGetRawTxPathParams = field()
    

@dataclass
class TestnetGetRawTxResponse:
    content_type: str = field()
    status_code: int = field()
    get_raw_tx_response: Optional[shared.GetRawTxResponse] = field(default=None)
    
