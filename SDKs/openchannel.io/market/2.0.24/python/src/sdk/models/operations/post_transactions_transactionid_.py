from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostTransactionsTransactionIDPathParams:
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTransactionsTransactionIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    

@dataclass
class PostTransactionsTransactionIDRequest:
    path_params: PostTransactionsTransactionIDPathParams = field(default=None)
    query_params: PostTransactionsTransactionIDQueryParams = field(default=None)
    

@dataclass
class PostTransactionsTransactionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
