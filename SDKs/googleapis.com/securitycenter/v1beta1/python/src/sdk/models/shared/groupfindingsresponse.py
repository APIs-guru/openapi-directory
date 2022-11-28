from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupFindingsResponse:
    r"""GroupFindingsResponse
    Response message for group by findings.
    """
    
    group_by_results: Optional[List[GroupResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupByResults') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    
