from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AchievementIncrementResponse:
    current_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentSteps' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    newly_unlocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newlyUnlocked' }})
    
