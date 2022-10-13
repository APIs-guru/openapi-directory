from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import container


@dataclass_json
@dataclass
class ListContainersResponse:
    container: Optional[List[container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
