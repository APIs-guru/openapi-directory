from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import playlistitem
from . import playlistvisibilityfield_enum

class PlaylistResponseTypeEnum(str, Enum):
    EPISODE_LIST = "episode_list"
    PODCAST_LIST = "podcast_list"


@dataclass_json
@dataclass
class PlaylistResponse:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    items: Optional[List[playlistitem.PlaylistItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    last_timestamp_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_timestamp_ms' }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    type: Optional[PlaylistResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    visibility: Optional[playlistvisibilityfield_enum.PlaylistVisibilityFieldEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
