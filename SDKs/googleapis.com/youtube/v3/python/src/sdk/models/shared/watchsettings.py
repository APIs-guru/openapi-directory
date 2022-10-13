from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WatchSettings:
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    featured_playlist_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featuredPlaylistId' }})
    text_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textColor' }})
    
