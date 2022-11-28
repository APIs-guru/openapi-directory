from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AchievementConfigurationAchievementTypeEnum(str, Enum):
    ACHIEVEMENT_TYPE_UNSPECIFIED = "ACHIEVEMENT_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    INCREMENTAL = "INCREMENTAL"

class AchievementConfigurationInitialStateEnum(str, Enum):
    INITIAL_STATE_UNSPECIFIED = "INITIAL_STATE_UNSPECIFIED"
    HIDDEN = "HIDDEN"
    REVEALED = "REVEALED"


@dataclass_json
@dataclass
class AchievementConfiguration:
    r"""AchievementConfiguration
    An achievement configuration resource.
    """
    
    achievement_type: Optional[AchievementConfigurationAchievementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievementType') }})
    draft: Optional[AchievementConfigurationDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_state: Optional[AchievementConfigurationInitialStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    published: Optional[AchievementConfigurationDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    steps_to_unlock: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepsToUnlock') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
