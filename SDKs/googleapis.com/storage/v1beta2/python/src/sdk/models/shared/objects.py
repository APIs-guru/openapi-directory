from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import object


@dataclass_json
@dataclass
class Objects:
    items: Optional[List[object.Object]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixes' }})
    
