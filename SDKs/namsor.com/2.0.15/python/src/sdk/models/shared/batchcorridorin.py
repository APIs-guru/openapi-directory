from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import corridorin


@dataclass_json
@dataclass
class BatchCorridorIn:
    corridor_from_to: Optional[List[corridorin.CorridorIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corridorFromTo' }})
    
