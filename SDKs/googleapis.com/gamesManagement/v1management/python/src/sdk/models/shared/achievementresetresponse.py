from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AchievementResetResponse:
    current_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentState' }})
    definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitionId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    update_occurred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateOccurred' }})
    
