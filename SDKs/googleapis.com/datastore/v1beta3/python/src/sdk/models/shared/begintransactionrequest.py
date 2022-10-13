from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transactionoptions


@dataclass_json
@dataclass
class BeginTransactionRequest:
    transaction_options: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionOptions' }})
    
