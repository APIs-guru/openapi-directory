from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayerName:
    r"""PlayerName
    An object representation of the individual components of the player's name. For some players, these fields may not be present.
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
    experience_info: Optional[GamesPlayerExperienceInfoResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experienceInfo') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[PlayerName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPlayerId') }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    profile_settings: Optional[ProfileSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileSettings') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
