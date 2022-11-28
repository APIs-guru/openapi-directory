from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllThemeMediaResult:
    soundtrack_songs_result: Optional[ThemeMediaResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SoundtrackSongsResult') }})
    theme_songs_result: Optional[ThemeMediaResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThemeSongsResult') }})
    theme_videos_result: Optional[ThemeMediaResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThemeVideosResult') }})
    
