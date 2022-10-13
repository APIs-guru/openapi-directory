from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import episodesimple
from . import podcastsimple
from . import customaudio
from . import deleteditem

class PlaylistItemTypeEnum(str, Enum):
    EPISODE = "episode"
    CUSTOM_AUDIO = "custom_audio"
    PODCAST = "podcast"


@dataclass_json
@dataclass
class PlaylistItem:
    added_at_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_at_ms' }})
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    type: Optional[PlaylistItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
