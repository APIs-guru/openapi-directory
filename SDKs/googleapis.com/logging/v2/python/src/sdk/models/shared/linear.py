from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Linear:
    num_finite_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numFiniteBuckets' }})
    offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
