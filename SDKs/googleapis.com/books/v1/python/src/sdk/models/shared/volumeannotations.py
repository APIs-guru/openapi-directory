from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volumeannotation


@dataclass_json
@dataclass
class Volumeannotations:
    items: Optional[List[volumeannotation.Volumeannotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
