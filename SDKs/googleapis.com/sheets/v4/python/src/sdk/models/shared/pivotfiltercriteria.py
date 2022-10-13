from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import booleancondition


@dataclass_json
@dataclass
class PivotFilterCriteria:
    condition: Optional[booleancondition.BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    visible_by_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleByDefault' }})
    visible_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleValues' }})
    
