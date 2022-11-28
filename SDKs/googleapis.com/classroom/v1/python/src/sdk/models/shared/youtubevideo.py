from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class YouTubeVideo:
    r"""YouTubeVideo
    YouTube video item.
    """
    
    alternate_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
