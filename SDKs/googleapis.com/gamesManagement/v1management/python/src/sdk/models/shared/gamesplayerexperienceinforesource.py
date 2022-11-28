from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GamesPlayerExperienceInfoResource:
    r"""GamesPlayerExperienceInfoResource
    1P/3P metadata about the player's experience.
    """
    
    current_experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentExperiencePoints') }})
    current_level: Optional[GamesPlayerLevelResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLevel') }})
    last_level_up_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLevelUpTimestampMillis') }})
    next_level: Optional[GamesPlayerLevelResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextLevel') }})
    
