from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryDriveActivityRequest:
    r"""QueryDriveActivityRequest
    The request message for querying Drive activity.
    """
    
    ancestor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestorName') }})
    consolidation_strategy: Optional[ConsolidationStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consolidationStrategy') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemName') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    
