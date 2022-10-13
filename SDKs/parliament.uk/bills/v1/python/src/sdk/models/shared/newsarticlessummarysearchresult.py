from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import newsarticlessummary


@dataclass_json
@dataclass
class NewsArticlesSummarySearchResult:
    items: Optional[List[newsarticlessummary.NewsArticlesSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerPage' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
