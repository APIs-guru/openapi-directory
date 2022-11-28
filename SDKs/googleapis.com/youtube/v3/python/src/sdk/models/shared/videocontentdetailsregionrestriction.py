from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoContentDetailsRegionRestriction:
    r"""VideoContentDetailsRegionRestriction
    DEPRECATED Region restriction of the video.
    """
    
    allowed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed') }})
    blocked: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    
