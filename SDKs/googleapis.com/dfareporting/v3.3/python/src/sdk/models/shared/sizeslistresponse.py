from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import size


@dataclass_json
@dataclass
class SizesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    sizes: Optional[List[size.Size]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    
