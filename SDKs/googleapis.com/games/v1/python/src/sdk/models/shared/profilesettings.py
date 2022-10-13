from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ProfileSettingsFriendsListVisibilityEnum(str, Enum):
    FRIENDS_LIST_VISIBILITY_UNSPECIFIED = "FRIENDS_LIST_VISIBILITY_UNSPECIFIED"
    VISIBLE = "VISIBLE"
    REQUEST_REQUIRED = "REQUEST_REQUIRED"
    UNAVAILABLE = "UNAVAILABLE"


@dataclass_json
@dataclass
class ProfileSettings:
    friends_list_visibility: Optional[ProfileSettingsFriendsListVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendsListVisibility' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    profile_visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileVisible' }})
    
