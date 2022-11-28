from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse:
    r"""GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse
    Response with a paginated list of issues that matched the request.
    """
    
    error_issues: Optional[List[GooglePlayDeveloperReportingV1alpha1ErrorIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorIssues') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
