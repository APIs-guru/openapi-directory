from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import leveldetails


@dataclass_json
@dataclass
class MembershipsLevelSnippet:
    creator_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorChannelId' }})
    level_details: Optional[leveldetails.LevelDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'levelDetails' }})
    
