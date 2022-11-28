from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AchievementDefinitionAchievementTypeEnum(str, Enum):
    ACHIEVEMENT_TYPE_UNSPECIFIED = "ACHIEVEMENT_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    INCREMENTAL = "INCREMENTAL"

class AchievementDefinitionInitialStateEnum(str, Enum):
    INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"
    UNLOCKED = "UNLOCKED"


@dataclass_json
@dataclass
class AchievementDefinition:
    r"""AchievementDefinition
    An achievement definition object.
    """
    
    achievement_type: Optional[AchievementDefinitionAchievementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievementType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiencePoints') }})
    formatted_total_steps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedTotalSteps') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_state: Optional[AchievementDefinitionInitialStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    is_revealed_icon_url_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRevealedIconUrlDefault') }})
    is_unlocked_icon_url_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUnlockedIconUrlDefault') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revealed_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revealedIconUrl') }})
    total_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSteps') }})
    unlocked_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlockedIconUrl') }})
    
