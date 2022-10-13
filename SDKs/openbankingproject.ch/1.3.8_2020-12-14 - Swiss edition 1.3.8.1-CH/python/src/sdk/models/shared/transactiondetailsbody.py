from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import transactions


@dataclass_json
@dataclass
class TransactionDetailsBody:
    transaction_details: transactions.Transactions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionDetails' }})
    
