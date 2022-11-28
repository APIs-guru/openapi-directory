from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTransactionPathParams:
    transaction_number: str = field(metadata={'path_param': { 'field_name': 'transactionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTransactionRequest:
    path_params: GetTransactionPathParams = field()
    security: GetTransactionSecurity = field()
    

@dataclass
class GetTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
