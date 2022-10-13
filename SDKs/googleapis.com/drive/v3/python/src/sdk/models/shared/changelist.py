from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import change


@dataclass_json
@dataclass
class ChangeList:
    changes: Optional[List[change.Change]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    new_start_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newStartPageToken' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
