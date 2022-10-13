from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import platform


@dataclass_json
@dataclass
class ListPlatformsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    platforms: Optional[List[platform.Platform]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    
