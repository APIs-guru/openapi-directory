from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionInfoPathParams:
    txid: str = field(default=None, metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionInfoRequest:
    path_params: GetTransactionInfoPathParams = field(default=None)
    

@dataclass
class GetTransactionInfoResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    get_transaction_info_response: Optional[shared.GetTransactionInfoResponse] = field(default=None)
    
