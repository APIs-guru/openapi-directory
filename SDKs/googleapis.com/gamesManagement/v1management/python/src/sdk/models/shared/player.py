from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gamesplayerexperienceinforesource
from . import profilesettings


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
    experience_info: Optional[gamesplayerexperienceinforesource.GamesPlayerExperienceInfoResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experienceInfo' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[PlayerName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPlayerId' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerId' }})
    profile_settings: Optional[profilesettings.ProfileSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileSettings' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
