from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentRequest:
    cvv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvv' }})
    usd: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usd' }})
    
