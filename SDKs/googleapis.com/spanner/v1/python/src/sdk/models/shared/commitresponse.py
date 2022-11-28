from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitResponse:
    r"""CommitResponse
    The response for Commit.
    """
    
    commit_stats: Optional[CommitStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitStats') }})
    commit_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitTimestamp') }})
    
