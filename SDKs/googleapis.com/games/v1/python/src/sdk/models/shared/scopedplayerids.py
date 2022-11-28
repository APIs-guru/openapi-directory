from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScopedPlayerIds:
    r"""ScopedPlayerIds
    Scoped player identifiers.
    """
    
    developer_player_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerPlayerKey') }})
    game_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gamePlayerId') }})
    
