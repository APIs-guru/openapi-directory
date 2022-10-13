from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import space


@dataclass_json
@dataclass
class ListSpacesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    spaces: Optional[List[space.Space]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaces' }})
    
