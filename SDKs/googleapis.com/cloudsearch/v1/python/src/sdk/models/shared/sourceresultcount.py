from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import source


@dataclass_json
@dataclass
class SourceResultCount:
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasMoreResults' }})
    result_count_estimate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultCountEstimate' }})
    result_count_exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultCountExact' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
