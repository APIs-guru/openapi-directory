from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTxPathParams:
    txid: str = field(default=None, metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTxRequest:
    path_params: GetTxPathParams = field(default=None)
    

@dataclass
class GetTxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_tx_response: Optional[shared.GetTxResponse] = field(default=None)
    
