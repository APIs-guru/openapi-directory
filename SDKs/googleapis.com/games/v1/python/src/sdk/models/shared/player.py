from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlayerFriendStatusEnum(str, Enum):
    FRIEND_STATUS_UNSPECIFIED = "FRIEND_STATUS_UNSPECIFIED"
    NO_RELATIONSHIP = "NO_RELATIONSHIP"
    FRIEND = "FRIEND"


@dataclass_json
@dataclass
class PlayerName:
    r"""PlayerName
    A representation of the individual components of the name.
    """
    
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclass
class Player:
    r"""Player
    A Player resource.
    """
    
    avatar_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarImageUrl') }})
    banner_url_landscape: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerUrlLandscape') }})
    banner_url_portrait: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerUrlPortrait') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    experience_info: Optional[PlayerExperienceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experienceInfo') }})
    friend_status: Optional[PlayerFriendStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendStatus') }})
    game_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gamePlayerId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[PlayerName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPlayerId') }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    profile_settings: Optional[ProfileSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileSettings') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
