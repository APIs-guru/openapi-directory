from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryAssetsRequest:
    r"""QueryAssetsRequest
    QueryAssets request.
    """
    
    job_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobReference') }})
    output_config: Optional[QueryAssetsOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    read_time_window: Optional[TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTimeWindow') }})
    statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statement') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
