from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchWriteRequest:
    r"""BatchWriteRequest
    The request for Firestore.BatchWrite.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    writes: Optional[List[Write]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writes') }})
    
