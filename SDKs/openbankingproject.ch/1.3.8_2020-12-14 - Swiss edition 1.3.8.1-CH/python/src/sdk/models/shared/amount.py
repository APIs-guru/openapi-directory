from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Amount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    
