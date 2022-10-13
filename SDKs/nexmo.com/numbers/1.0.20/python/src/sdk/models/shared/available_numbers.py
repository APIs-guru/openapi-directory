from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import availablenumber


@dataclass_json
@dataclass
class AvailableNumbers:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    numbers: Optional[List[availablenumber.Availablenumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numbers' }})
    
