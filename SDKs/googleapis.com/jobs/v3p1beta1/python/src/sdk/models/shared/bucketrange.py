from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BucketRange:
    from_: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
