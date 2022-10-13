from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volume


@dataclass_json
@dataclass
class Volumes:
    items: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    
