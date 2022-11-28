from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTxPathParams:
    txid: str = field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTxRequest:
    path_params: GetTxPathParams = field()
    

@dataclass
class GetTxResponse:
    content_type: str = field()
    status_code: int = field()
    get_tx_response: Optional[shared.GetTxResponse] = field(default=None)
    
