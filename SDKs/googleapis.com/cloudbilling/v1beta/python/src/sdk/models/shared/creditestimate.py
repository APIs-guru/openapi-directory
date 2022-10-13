from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class CreditEstimate:
    credit_amount: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditAmount' }})
    credit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditDescription' }})
    credit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditType' }})
    
