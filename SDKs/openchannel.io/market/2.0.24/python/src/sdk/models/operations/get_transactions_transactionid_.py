from dataclasses import dataclass, field



@dataclass
class GetTransactionsTransactionIDPathParams:
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsTransactionIDRequest:
    path_params: GetTransactionsTransactionIDPathParams = field(default=None)
    

@dataclass
class GetTransactionsTransactionIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
