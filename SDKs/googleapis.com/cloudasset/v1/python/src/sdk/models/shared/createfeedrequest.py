from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFeedRequest:
    r"""CreateFeedRequest
    Create asset feed request.
    """
    
    feed: Optional[Feed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedId') }})
    
