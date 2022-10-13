from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GamesAchievementSetStepsAtLeast:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    
