from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import posstore


@dataclass_json
@dataclass
class PosListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    resources: Optional[List[posstore.PosStore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
