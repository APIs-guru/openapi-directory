from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRawTxPathParams:
    txid: str = field(default=None, metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawTxRequest:
    path_params: GetRawTxPathParams = field(default=None)
    

@dataclass
class GetRawTxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_raw_tx_response: Optional[shared.GetRawTxResponse] = field(default=None)
    
