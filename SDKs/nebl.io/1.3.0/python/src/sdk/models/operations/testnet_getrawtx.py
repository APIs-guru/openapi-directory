from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetRawTxPathParams:
    txid: str = field(default=None, metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetRawTxRequest:
    path_params: TestnetGetRawTxPathParams = field(default=None)
    

@dataclass
class TestnetGetRawTxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_raw_tx_response: Optional[shared.GetRawTxResponse] = field(default=None)
    
