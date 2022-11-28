from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTriggersResponse:
    r"""ListTriggersResponse
    The response message for the ListTriggers method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    triggers: Optional[List[Trigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
