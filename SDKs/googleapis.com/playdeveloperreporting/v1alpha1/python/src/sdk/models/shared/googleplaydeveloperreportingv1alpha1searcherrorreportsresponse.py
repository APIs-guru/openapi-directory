from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse:
    r"""GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse
    Response with a paginated list of error reports matching the search query.
    """
    
    error_reports: Optional[List[GooglePlayDeveloperReportingV1alpha1ErrorReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorReports') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
