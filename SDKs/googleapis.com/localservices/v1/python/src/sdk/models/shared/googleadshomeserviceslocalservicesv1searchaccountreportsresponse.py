from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse:
    r"""GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
    A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
    """
    
    account_reports: Optional[List[GoogleAdsHomeservicesLocalservicesV1AccountReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountReports') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
