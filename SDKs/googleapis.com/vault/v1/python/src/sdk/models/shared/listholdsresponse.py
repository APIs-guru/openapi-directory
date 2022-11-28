from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListHoldsResponse:
    r"""ListHoldsResponse
    The holds for a matter.
    """
    
    holds: Optional[List[Hold]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holds') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
