from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class CompensationRange:
    max_compensation: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCompensation' }})
    min_compensation: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minCompensation' }})
    
