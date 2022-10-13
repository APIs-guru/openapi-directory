from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import playerexperienceinfo
from . import profilesettings

class PlayerFriendStatusEnum(str, Enum):
    FRIEND_STATUS_UNSPECIFIED = "FRIEND_STATUS_UNSPECIFIED"
    NO_RELATIONSHIP = "NO_RELATIONSHIP"
    FRIEND = "FRIEND"


@dataclass_json
@dataclass
class PlayerName:
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

@dataclass_json
@dataclass
class Player:
    avatar_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarImageUrl' }})
    banner_url_landscape: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerUrlLandscape' }})
    banner_url_portrait: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerUrlPortrait' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    experience_info: Optional[playerexperienceinfo.PlayerExperienceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experienceInfo' }})
    friend_status: Optional[PlayerFriendStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendStatus' }})
    game_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gamePlayerId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[PlayerName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPlayerId' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerId' }})
    profile_settings: Optional[profilesettings.ProfileSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileSettings' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
