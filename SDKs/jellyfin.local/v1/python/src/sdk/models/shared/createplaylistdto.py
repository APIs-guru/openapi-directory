from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePlaylistDto:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ids' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
