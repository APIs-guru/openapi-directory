from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import spacedetails

class SpaceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ROOM = "ROOM"
    DM = "DM"


@dataclass_json
@dataclass
class Space:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    single_user_bot_dm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleUserBotDm' }})
    space_details: Optional[spacedetails.SpaceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceDetails' }})
    threaded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threaded' }})
    type: Optional[SpaceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
