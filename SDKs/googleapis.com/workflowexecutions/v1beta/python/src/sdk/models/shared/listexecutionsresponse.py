from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListExecutionsResponse:
    r"""ListExecutionsResponse
    Response for the ListExecutions method.
    """
    
    executions: Optional[List[Execution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
