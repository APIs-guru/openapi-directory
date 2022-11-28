from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostTransactionsTransactionIDPathParams:
    transaction_id: str = field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTransactionsTransactionIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    

@dataclass
class PostTransactionsTransactionIDRequest:
    path_params: PostTransactionsTransactionIDPathParams = field()
    query_params: PostTransactionsTransactionIDQueryParams = field()
    

@dataclass
class PostTransactionsTransactionIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
