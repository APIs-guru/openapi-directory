from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DocumentRemove:
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    removed_target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedTargetIds' }})
    
