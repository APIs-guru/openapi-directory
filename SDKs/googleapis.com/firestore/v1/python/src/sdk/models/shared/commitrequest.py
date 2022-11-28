from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitRequest:
    r"""CommitRequest
    The request for Firestore.Commit.
    """
    
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    writes: Optional[List[Write]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writes') }})
    
