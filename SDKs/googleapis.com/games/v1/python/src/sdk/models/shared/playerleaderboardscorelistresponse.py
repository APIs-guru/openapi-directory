from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayerLeaderboardScoreListResponse:
    r"""PlayerLeaderboardScoreListResponse
    A list of player leaderboard scores.
    """
    
    items: Optional[List[PlayerLeaderboardScore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    player: Optional[Player] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    
