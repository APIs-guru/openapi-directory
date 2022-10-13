from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import playlistcontentdetails
from . import playlistlocalization
from . import playlistplayer
from . import playlistsnippet
from . import playliststatus


@dataclass_json
@dataclass
class Playlist:
    content_details: Optional[playlistcontentdetails.PlaylistContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    localizations: Optional[dict[str, playlistlocalization.PlaylistLocalization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizations' }})
    player: Optional[playlistplayer.PlaylistPlayer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    snippet: Optional[playlistsnippet.PlaylistSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    status: Optional[playliststatus.PlaylistStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
