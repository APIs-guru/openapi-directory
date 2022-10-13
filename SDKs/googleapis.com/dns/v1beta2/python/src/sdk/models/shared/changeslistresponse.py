from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import change
from . import responseheader


@dataclass_json
@dataclass
class ChangesListResponse:
    changes: Optional[List[change.Change]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
