from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryjob_results_overview_entry


@dataclass_json
@dataclass
class QueryjobResultsOverview:
    data: Optional[List[queryjob_results_overview_entry.QueryjobResultsOverviewEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    
