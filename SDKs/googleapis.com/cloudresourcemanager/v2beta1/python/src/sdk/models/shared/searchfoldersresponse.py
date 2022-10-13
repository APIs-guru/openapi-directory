from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import folder


@dataclass_json
@dataclass
class SearchFoldersResponse:
    folders: Optional[List[folder.Folder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
