from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleexamplelibraryagentv1shelf


@dataclass_json
@dataclass
class GoogleExampleLibraryagentV1ListShelvesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    shelves: Optional[List[googleexamplelibraryagentv1shelf.GoogleExampleLibraryagentV1Shelf]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shelves' }})
    
