from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultSetStats:
    r"""ResultSetStats
    Additional statistics about a ResultSet or PartialResultSet.
    """
    
    query_plan: Optional[QueryPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryPlan') }})
    query_stats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryStats') }})
    row_count_exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCountExact') }})
    row_count_lower_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCountLowerBound') }})
    
