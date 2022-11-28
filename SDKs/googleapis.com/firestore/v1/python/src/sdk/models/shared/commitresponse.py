from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitResponse:
    r"""CommitResponse
    The response for Firestore.Commit.
    """
    
    commit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitTime') }})
    write_results: Optional[List[WriteResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeResults') }})
    
