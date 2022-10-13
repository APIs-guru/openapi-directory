from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thememediaresult
from . import thememediaresult
from . import thememediaresult


@dataclass_json
@dataclass
class AllThemeMediaResult:
    soundtrack_songs_result: Optional[thememediaresult.ThemeMediaResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SoundtrackSongsResult' }})
    theme_songs_result: Optional[thememediaresult.ThemeMediaResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThemeSongsResult' }})
    theme_videos_result: Optional[thememediaresult.ThemeMediaResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThemeVideosResult' }})
    
