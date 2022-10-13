from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchresult


@dataclass_json
@dataclass
class SearchResponse:
    results: Optional[List[searchresult.SearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
