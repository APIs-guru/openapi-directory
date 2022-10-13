from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error


@dataclass_json
@dataclass
class CreateTimeSeriesSummary:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    success_point_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successPointCount' }})
    total_point_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPointCount' }})
    
