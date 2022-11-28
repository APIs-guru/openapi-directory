from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFindingsResponse:
    r"""ListFindingsResponse
    Response for the `ListFindings` method.
    """
    
    findings: Optional[List[Finding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
