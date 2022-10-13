from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import versionfile


@dataclass_json
@dataclass
class ListVersionFilesResponse:
    files: Optional[List[versionfile.VersionFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
