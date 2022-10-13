from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReturnPolicyPolicy:
    last_return_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastReturnDate' }})
    number_of_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfDays' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
