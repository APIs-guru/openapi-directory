from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gamesplayerlevelresource
from . import gamesplayerlevelresource


@dataclass_json
@dataclass
class GamesPlayerExperienceInfoResource:
    current_experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentExperiencePoints' }})
    current_level: Optional[gamesplayerlevelresource.GamesPlayerLevelResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentLevel' }})
    last_level_up_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLevelUpTimestampMillis' }})
    next_level: Optional[gamesplayerlevelresource.GamesPlayerLevelResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextLevel' }})
    
