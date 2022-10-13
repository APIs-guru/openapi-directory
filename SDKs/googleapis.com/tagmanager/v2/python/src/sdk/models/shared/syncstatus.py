from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SyncStatus:
    merge_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeConflict' }})
    sync_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncError' }})
    
