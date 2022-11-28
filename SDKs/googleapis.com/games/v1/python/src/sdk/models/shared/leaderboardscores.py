from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LeaderboardScores:
    r"""LeaderboardScores
    A ListScores response.
    """
    
    items: Optional[List[LeaderboardEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    num_scores: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numScores') }})
    player_score: Optional[LeaderboardEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerScore') }})
    prev_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevPageToken') }})
    
