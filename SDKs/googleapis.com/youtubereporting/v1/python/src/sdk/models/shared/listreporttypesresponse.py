from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReportTypesResponse:
    r"""ListReportTypesResponse
    Response message for ReportingService.ListReportTypes.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    report_types: Optional[List[ReportType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTypes') }})
    
