from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTransactionPathParams:
    transaction_number: str = field(default=None, metadata={'path_param': { 'field_name': 'transactionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTransactionRequest:
    path_params: GetTransactionPathParams = field(default=None)
    security: GetTransactionSecurity = field(default=None)
    

@dataclass
class GetTransactionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
