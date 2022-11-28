from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GamesAchievementIncrement:
    r"""GamesAchievementIncrement
    The payload to request to increment an achievement.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
