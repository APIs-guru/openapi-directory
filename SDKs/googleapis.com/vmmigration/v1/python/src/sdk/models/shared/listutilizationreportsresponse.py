from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUtilizationReportsResponse:
    r"""ListUtilizationReportsResponse
    Response message for 'ListUtilizationReports' request.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    utilization_reports: Optional[List[UtilizationReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationReports') }})
    
