from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billsummary


@dataclass_json
@dataclass
class BillSummarySearchResult:
    items: Optional[List[billsummary.BillSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerPage' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
