from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlayerAchievementAchievementStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclass
class PlayerAchievement:
    r"""PlayerAchievement
    An achievement object.
    """
    
    achievement_state: Optional[PlayerAchievementAchievementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievementState') }})
    current_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSteps') }})
    experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiencePoints') }})
    formatted_current_steps_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedCurrentStepsString') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_updated_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedTimestamp') }})
    
