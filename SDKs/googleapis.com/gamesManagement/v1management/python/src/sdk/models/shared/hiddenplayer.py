from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import player


@dataclass_json
@dataclass
class HiddenPlayer:
    hidden_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenTimeMillis' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    player: Optional[player.Player] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    
