from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import draft


@dataclass_json
@dataclass
class ListDraftsResponse:
    drafts: Optional[List[draft.Draft]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drafts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    result_size_estimate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultSizeEstimate' }})
    
