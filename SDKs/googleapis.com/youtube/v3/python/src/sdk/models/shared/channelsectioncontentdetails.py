from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelSectionContentDetails:
    channels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    playlists: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlists' }})
    
