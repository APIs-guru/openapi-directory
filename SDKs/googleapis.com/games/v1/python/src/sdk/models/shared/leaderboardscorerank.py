from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LeaderboardScoreRank:
    r"""LeaderboardScoreRank
    A score rank in a leaderboard.
    """
    
    formatted_num_scores: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedNumScores') }})
    formatted_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedRank') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    num_scores: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numScores') }})
    rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
