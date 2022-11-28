from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupAssetsRequest:
    r"""GroupAssetsRequest
    Request message for grouping by assets.
    """
    
    compare_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compareDuration') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    group_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupBy') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    
