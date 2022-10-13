from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerversionheader


@dataclass_json
@dataclass
class ListContainerVersionsResponse:
    container_version_header: Optional[List[containerversionheader.ContainerVersionHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersionHeader' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
