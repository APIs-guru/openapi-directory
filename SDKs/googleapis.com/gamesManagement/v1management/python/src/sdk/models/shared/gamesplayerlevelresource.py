from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GamesPlayerLevelResource:
    r"""GamesPlayerLevelResource
    1P/3P metadata about a user's level.
    """
    
    level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    max_experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxExperiencePoints') }})
    min_experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minExperiencePoints') }})
    
