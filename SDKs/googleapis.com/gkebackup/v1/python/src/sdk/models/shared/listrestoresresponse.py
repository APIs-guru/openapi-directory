from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import restore


@dataclass_json
@dataclass
class ListRestoresResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    restores: Optional[List[restore.Restore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restores' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
