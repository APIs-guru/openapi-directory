from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceid
from . import searchresultsnippet


@dataclass_json
@dataclass
class SearchResult:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[searchresultsnippet.SearchResultSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
