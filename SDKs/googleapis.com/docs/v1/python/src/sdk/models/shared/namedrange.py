from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import range


@dataclass_json
@dataclass
class NamedRange:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRangeId' }})
    ranges: Optional[List[range.Range]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranges' }})
    
