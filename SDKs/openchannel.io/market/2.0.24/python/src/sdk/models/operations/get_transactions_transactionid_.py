from dataclasses import dataclass, field



@dataclass
class GetTransactionsTransactionIDPathParams:
    transaction_id: str = field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsTransactionIDRequest:
    path_params: GetTransactionsTransactionIDPathParams = field()
    

@dataclass
class GetTransactionsTransactionIDResponse:
    content_type: str = field()
    status_code: int = field()
    
