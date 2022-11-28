from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoCategorySnippet:
    r"""VideoCategorySnippet
    Basic details about a video category, such as its localized title.
    """
    
    assignable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignable') }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
