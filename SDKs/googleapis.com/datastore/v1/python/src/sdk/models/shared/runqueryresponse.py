from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunQueryResponse:
    r"""RunQueryResponse
    The response for Datastore.RunQuery.
    """
    
    batch: Optional[QueryResultBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch') }})
    query: Optional[Query] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
