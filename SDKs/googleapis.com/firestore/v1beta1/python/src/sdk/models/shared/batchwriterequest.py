from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import write


@dataclass_json
@dataclass
class BatchWriteRequest:
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    writes: Optional[List[write.Write]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writes' }})
    
