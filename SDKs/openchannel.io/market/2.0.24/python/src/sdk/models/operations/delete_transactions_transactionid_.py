from dataclasses import dataclass, field



@dataclass
class DeleteTransactionsTransactionIDPathParams:
    transaction_id: str = field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTransactionsTransactionIDRequest:
    path_params: DeleteTransactionsTransactionIDPathParams = field()
    

@dataclass
class DeleteTransactionsTransactionIDResponse:
    content_type: str = field()
    status_code: int = field()
    
