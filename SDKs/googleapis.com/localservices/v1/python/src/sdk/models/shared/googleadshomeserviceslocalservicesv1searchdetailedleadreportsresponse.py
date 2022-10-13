from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleadshomeserviceslocalservicesv1detailedleadreport


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse:
    detailed_lead_reports: Optional[List[googleadshomeserviceslocalservicesv1detailedleadreport.GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailedLeadReports' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
