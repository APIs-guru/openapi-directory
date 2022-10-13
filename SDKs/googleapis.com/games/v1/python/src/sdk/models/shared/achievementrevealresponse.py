from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AchievementRevealResponseCurrentStateEnum(str, Enum):
    REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED = "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclass
class AchievementRevealResponse:
    current_state: Optional[AchievementRevealResponseCurrentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentState' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
