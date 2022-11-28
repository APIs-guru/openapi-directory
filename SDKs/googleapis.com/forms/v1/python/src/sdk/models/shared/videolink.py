from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoLink:
    r"""VideoLink
    Link to a video.
    """
    
    display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayText') }})
    youtube_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeUri') }})
    
