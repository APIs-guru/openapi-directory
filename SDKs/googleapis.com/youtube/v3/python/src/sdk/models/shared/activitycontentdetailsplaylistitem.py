from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceid


@dataclass_json
@dataclass
class ActivityContentDetailsPlaylistItem:
    playlist_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlistId' }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlistItemId' }})
    resource_id: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    
