from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MovePlaylistItemRequestDto:
    new_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewIndex' }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaylistItemId' }})
    
