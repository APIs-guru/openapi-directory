from dataclasses import dataclass, field



@dataclass
class DeleteTransactionsTransactionIDPathParams:
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTransactionsTransactionIDRequest:
    path_params: DeleteTransactionsTransactionIDPathParams = field(default=None)
    

@dataclass
class DeleteTransactionsTransactionIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
