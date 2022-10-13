from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import achievementupdaterequest


@dataclass_json
@dataclass
class AchievementUpdateMultipleRequest:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    updates: Optional[List[achievementupdaterequest.AchievementUpdateRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updates' }})
    
