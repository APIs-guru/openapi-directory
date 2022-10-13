from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AchievementUpdateResponseCurrentStateEnum(str, Enum):
    UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclass
class AchievementUpdateResponse:
    achievement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'achievementId' }})
    current_state: Optional[AchievementUpdateResponseCurrentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentState' }})
    current_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentSteps' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    newly_unlocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newlyUnlocked' }})
    update_occurred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateOccurred' }})
    
