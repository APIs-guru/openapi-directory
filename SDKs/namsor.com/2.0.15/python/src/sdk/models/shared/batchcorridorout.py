from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import corridorout


@dataclass_json
@dataclass
class BatchCorridorOut:
    corridor_from_to: Optional[List[corridorout.CorridorOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corridorFromTo' }})
    
