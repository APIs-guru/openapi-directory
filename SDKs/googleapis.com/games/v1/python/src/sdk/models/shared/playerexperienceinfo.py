from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import playerlevel
from . import playerlevel


@dataclass_json
@dataclass
class PlayerExperienceInfo:
    current_experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentExperiencePoints' }})
    current_level: Optional[playerlevel.PlayerLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentLevel' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_level_up_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLevelUpTimestampMillis' }})
    next_level: Optional[playerlevel.PlayerLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextLevel' }})
    
