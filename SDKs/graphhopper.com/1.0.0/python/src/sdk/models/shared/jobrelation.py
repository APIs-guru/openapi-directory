from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobRelation:
    ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vehicle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle_id' }})
    
