from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class OrderRefund:
    actor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonText' }})
    
