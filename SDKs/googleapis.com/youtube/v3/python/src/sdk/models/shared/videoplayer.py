from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoPlayer:
    r"""VideoPlayer
    Player to be used for a video playback.
    """
    
    embed_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedHeight') }})
    embed_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedHtml') }})
    embed_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedWidth') }})
    
