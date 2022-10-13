from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bucketrange


@dataclass_json
@dataclass
class BucketizedCount:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    range: Optional[bucketrange.BucketRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
