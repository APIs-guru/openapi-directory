from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembershipsLevelSnippet:
    creator_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorChannelId') }})
    level_details: Optional[LevelDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levelDetails') }})
    
