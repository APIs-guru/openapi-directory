from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWaitersResponse:
    r"""ListWaitersResponse
    Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    waiters: Optional[List[Waiter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiters') }})
    
