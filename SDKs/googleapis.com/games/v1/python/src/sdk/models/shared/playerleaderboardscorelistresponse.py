from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playerleaderboardscore
from . import player


@dataclass_json
@dataclass
class PlayerLeaderboardScoreListResponse:
    items: Optional[List[playerleaderboardscore.PlayerLeaderboardScore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    player: Optional[player.Player] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    
