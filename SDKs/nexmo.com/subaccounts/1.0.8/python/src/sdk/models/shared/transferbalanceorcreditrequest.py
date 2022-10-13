from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransferBalanceOrCreditRequest:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
