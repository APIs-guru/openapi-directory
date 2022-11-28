from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchWriteResponse:
    r"""BatchWriteResponse
    The response from Firestore.BatchWrite.
    """
    
    status: Optional[List[Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    write_results: Optional[List[WriteResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeResults') }})
    
