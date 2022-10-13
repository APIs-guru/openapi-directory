from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import write


@dataclass_json
@dataclass
class CommitRequest:
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    writes: Optional[List[write.Write]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writes' }})
    
