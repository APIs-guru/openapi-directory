from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationVerifyResponse:
    alternate_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternate_player_id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player_id' }})
    
