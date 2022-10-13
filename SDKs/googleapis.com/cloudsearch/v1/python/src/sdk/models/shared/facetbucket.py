from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import value


@dataclass_json
@dataclass
class FacetBucket:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    value: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
