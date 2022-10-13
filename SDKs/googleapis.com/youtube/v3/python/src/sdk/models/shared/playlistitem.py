from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import playlistitemcontentdetails
from . import playlistitemsnippet
from . import playlistitemstatus


@dataclass_json
@dataclass
class PlaylistItem:
    content_details: Optional[playlistitemcontentdetails.PlaylistItemContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[playlistitemsnippet.PlaylistItemSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    status: Optional[playlistitemstatus.PlaylistItemStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
