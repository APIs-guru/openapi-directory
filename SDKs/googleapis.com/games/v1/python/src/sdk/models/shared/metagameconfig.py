from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playerlevel


@dataclass_json
@dataclass
class MetagameConfig:
    current_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentVersion' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    player_levels: Optional[List[playerlevel.PlayerLevel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerLevels' }})
    
