from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AchievementUpdateResponseCurrentStateEnum(str, Enum):
    UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclass
class AchievementUpdateResponse:
    r"""AchievementUpdateResponse
    An updated achievement.
    """
    
    achievement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievementId') }})
    current_state: Optional[AchievementUpdateResponseCurrentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentState') }})
    current_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSteps') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    newly_unlocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newlyUnlocked') }})
    update_occurred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateOccurred') }})
    
