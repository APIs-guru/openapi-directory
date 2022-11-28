from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUptimeCheckConfigsResponse:
    r"""ListUptimeCheckConfigsResponse
    The protocol for the ListUptimeCheckConfigs response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    uptime_check_configs: Optional[List[UptimeCheckConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uptimeCheckConfigs') }})
    
