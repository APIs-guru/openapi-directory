from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file


@dataclass_json
@dataclass
class FileList:
    files: Optional[List[file.File]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    incomplete_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompleteSearch' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
