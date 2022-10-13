from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import extendedvalue


@dataclass_json
@dataclass
class PivotGroupSortValueBucket:
    buckets: Optional[List[extendedvalue.ExtendedValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buckets' }})
    values_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valuesIndex' }})
    
