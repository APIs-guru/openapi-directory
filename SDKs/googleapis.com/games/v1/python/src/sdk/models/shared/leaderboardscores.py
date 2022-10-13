from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import leaderboardentry
from . import leaderboardentry


@dataclass_json
@dataclass
class LeaderboardScores:
    items: Optional[List[leaderboardentry.LeaderboardEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    num_scores: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numScores' }})
    player_score: Optional[leaderboardentry.LeaderboardEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerScore' }})
    prev_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prevPageToken' }})
    
