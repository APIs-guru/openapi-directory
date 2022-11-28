from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRestorePlansResponse:
    r"""ListRestorePlansResponse
    Response message for ListRestorePlans.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    restore_plans: Optional[List[RestorePlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restorePlans') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
