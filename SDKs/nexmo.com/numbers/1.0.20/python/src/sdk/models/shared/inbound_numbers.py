from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ownednumber


@dataclass_json
@dataclass
class InboundNumbers:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    numbers: Optional[List[ownednumber.Ownednumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numbers' }})
    
