from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchresult
from . import resultdebuginfo
from . import metadata
from . import snippet


@dataclass_json
@dataclass
class SearchResult:
    clustered_results: Optional[List[searchresult.SearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusteredResults' }})
    debug_info: Optional[resultdebuginfo.ResultDebugInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugInfo' }})
    metadata: Optional[metadata.Metadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    snippet: Optional[snippet.Snippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
