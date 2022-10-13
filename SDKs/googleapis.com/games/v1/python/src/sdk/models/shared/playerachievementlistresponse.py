from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playerachievement


@dataclass_json
@dataclass
class PlayerAchievementListResponse:
    items: Optional[List[playerachievement.PlayerAchievement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
