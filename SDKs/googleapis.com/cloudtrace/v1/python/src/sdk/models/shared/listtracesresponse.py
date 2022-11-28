from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTracesResponse:
    r"""ListTracesResponse
    The response message for the `ListTraces` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    traces: Optional[List[Trace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traces') }})
    
