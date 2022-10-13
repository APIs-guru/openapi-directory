from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreditCard:
    card_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_number' }})
    cvv: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvv' }})
    expiry_month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry_month' }})
    expiry_year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry_year' }})
    
