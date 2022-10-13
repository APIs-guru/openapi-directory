from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleadshomeserviceslocalservicesv1accountreport


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse:
    account_reports: Optional[List[googleadshomeserviceslocalservicesv1accountreport.GoogleAdsHomeservicesLocalservicesV1AccountReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountReports' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
