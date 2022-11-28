from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserConfiguration:
    r"""UserConfiguration
    Class UserConfiguration.
    """
    
    audio_language_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioLanguagePreference') }})
    display_collections_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayCollectionsView') }})
    display_missing_episodes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayMissingEpisodes') }})
    enable_local_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableLocalPassword') }})
    enable_next_episode_auto_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableNextEpisodeAutoPlay') }})
    grouped_folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupedFolders') }})
    hide_played_in_latest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HidePlayedInLatest') }})
    latest_items_excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestItemsExcludes') }})
    my_media_excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MyMediaExcludes') }})
    ordered_views: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderedViews') }})
    play_default_audio_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayDefaultAudioTrack') }})
    remember_audio_selections: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RememberAudioSelections') }})
    remember_subtitle_selections: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RememberSubtitleSelections') }})
    subtitle_language_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleLanguagePreference') }})
    subtitle_mode: Optional[SubtitlePlaybackModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleMode') }})
    
