from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gamesachievementincrement
from . import gamesachievementsetstepsatleast

class AchievementUpdateRequestUpdateTypeEnum(str, Enum):
    ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED = "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
    REVEAL = "REVEAL"
    UNLOCK = "UNLOCK"
    INCREMENT = "INCREMENT"
    SET_STEPS_AT_LEAST = "SET_STEPS_AT_LEAST"


@dataclass_json
@dataclass
class AchievementUpdateRequest:
    achievement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'achievementId' }})
    increment_payload: Optional[gamesachievementincrement.GamesAchievementIncrement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incrementPayload' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    set_steps_at_least_payload: Optional[gamesachievementsetstepsatleast.GamesAchievementSetStepsAtLeast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setStepsAtLeastPayload' }})
    update_type: Optional[AchievementUpdateRequestUpdateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateType' }})
    
