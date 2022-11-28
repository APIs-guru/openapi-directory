from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFindingsResponse:
    r"""ListFindingsResponse
    Response message for listing findings.
    """
    
    findings: Optional[List[GoogleCloudSecuritycenterV1beta1Finding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
