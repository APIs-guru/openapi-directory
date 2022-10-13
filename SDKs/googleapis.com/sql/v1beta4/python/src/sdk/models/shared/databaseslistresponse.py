from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import database


@dataclass_json
@dataclass
class DatabasesListResponse:
    items: Optional[List[database.Database]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
