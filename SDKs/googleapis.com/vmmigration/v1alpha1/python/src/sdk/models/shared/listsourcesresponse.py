from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import source


@dataclass_json
@dataclass
class ListSourcesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sources: Optional[List[source.Source]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
