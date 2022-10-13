from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import document


@dataclass_json
@dataclass
class DocumentChange:
    document: Optional[document.Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    removed_target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedTargetIds' }})
    target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetIds' }})
    
