from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScopedPlayerIds:
    developer_player_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerPlayerKey' }})
    game_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gamePlayerId' }})
    
