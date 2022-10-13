from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import playlistvisibilityfield_enum


@dataclass_json
@dataclass
class PlaylistsResponsePlaylists:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode_count' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    last_timestamp_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_timestamp_ms' }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    podcast_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcast_count' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    visibility: Optional[playlistvisibilityfield_enum.PlaylistVisibilityFieldEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
