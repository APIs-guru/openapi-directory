from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import revision


@dataclass_json
@dataclass
class RevisionList:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    revisions: Optional[List[revision.Revision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    
