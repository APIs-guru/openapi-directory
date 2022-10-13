from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GamesPlayerLevelResource:
    level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    max_experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxExperiencePoints' }})
    min_experience_points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minExperiencePoints' }})
    
