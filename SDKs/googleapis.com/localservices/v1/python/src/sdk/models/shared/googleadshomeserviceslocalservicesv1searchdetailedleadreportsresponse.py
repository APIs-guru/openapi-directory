from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse:
    r"""GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
    A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
    """
    
    detailed_lead_reports: Optional[List[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedLeadReports') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
