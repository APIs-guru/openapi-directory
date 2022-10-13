from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import querysource


@dataclass_json
@dataclass
class ListQuerySourcesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sources: Optional[List[querysource.QuerySource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
