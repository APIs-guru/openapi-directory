from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import queryplan


@dataclass_json
@dataclass
class ResultSetStats:
    query_plan: Optional[queryplan.QueryPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryPlan' }})
    query_stats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryStats' }})
    row_count_exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCountExact' }})
    row_count_lower_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCountLowerBound' }})
    
