from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderReturn:
    actor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonText' }})
    
