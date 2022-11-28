from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WatchSettings:
    r"""WatchSettings
    Branding properties for the watch. All deprecated.
    """
    
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    featured_playlist_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featuredPlaylistId') }})
    text_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textColor') }})
    
