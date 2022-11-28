from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScoreSubmission:
    r"""ScoreSubmission
    A request to submit a score to leaderboards.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    leaderboard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderboardId') }})
    score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreTag') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
