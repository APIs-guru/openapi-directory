from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchhint


@dataclass_json
@dataclass
class SearchHintResult:
    search_hints: Optional[List[searchhint.SearchHint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchHints' }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecordCount' }})
    
