from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueueItem:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaylistItemId' }})
    
