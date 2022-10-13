from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imageversion


@dataclass_json
@dataclass
class ListImageVersionsResponse:
    image_versions: Optional[List[imageversion.ImageVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageVersions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
