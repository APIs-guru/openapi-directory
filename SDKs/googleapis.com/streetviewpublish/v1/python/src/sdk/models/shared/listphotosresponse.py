from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import photo


@dataclass_json
@dataclass
class ListPhotosResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    photos: Optional[List[photo.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    
