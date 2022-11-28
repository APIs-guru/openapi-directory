from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AchievementUpdateRequestUpdateTypeEnum(str, Enum):
    ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED = "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
    REVEAL = "REVEAL"
    UNLOCK = "UNLOCK"
    INCREMENT = "INCREMENT"
    SET_STEPS_AT_LEAST = "SET_STEPS_AT_LEAST"


@dataclass_json
@dataclass
class AchievementUpdateRequest:
    r"""AchievementUpdateRequest
    A request to update an achievement.
    """
    
    achievement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievementId') }})
    increment_payload: Optional[GamesAchievementIncrement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementPayload') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    set_steps_at_least_payload: Optional[GamesAchievementSetStepsAtLeast] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setStepsAtLeastPayload') }})
    update_type: Optional[AchievementUpdateRequestUpdateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateType') }})
    
