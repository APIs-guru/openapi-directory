from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AchievementIncrementResponse:
    r"""AchievementIncrementResponse
    An achievement increment response
    """
    
    current_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSteps') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    newly_unlocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newlyUnlocked') }})
    
