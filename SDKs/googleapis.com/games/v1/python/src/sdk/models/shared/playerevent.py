from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerEvent:
    definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitionId' }})
    formatted_num_events: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedNumEvents' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    num_events: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numEvents' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerId' }})
    
