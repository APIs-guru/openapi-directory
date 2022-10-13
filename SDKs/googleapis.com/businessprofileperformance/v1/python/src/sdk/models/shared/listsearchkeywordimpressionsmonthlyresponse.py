from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchkeywordcount


@dataclass_json
@dataclass
class ListSearchKeywordImpressionsMonthlyResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    search_keywords_counts: Optional[List[searchkeywordcount.SearchKeywordCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchKeywordsCounts' }})
    
