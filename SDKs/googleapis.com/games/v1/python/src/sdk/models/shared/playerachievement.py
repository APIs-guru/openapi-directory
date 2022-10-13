from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlayerAchievementAchievementStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclass
class PlayerAchievement:
    achievement_state: Optional[PlayerAchievementAchievementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'achievementState' }})
    current_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentSteps' }})
    experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experiencePoints' }})
    formatted_current_steps_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedCurrentStepsString' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTimestamp' }})
    
