from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playlistsresponse_playlists


@dataclass_json
@dataclass
class PlaylistsResponse:
    has_next: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_next' }})
    has_previous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_previous' }})
    next_page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_number' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_number' }})
    playlists: Optional[List[playlistsresponse_playlists.PlaylistsResponsePlaylists]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlists' }})
    previous_page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_number' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
