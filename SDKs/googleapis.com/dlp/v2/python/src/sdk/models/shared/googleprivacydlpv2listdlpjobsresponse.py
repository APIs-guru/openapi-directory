from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2dlpjob


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListDlpJobsResponse:
    jobs: Optional[List[googleprivacydlpv2dlpjob.GooglePrivacyDlpV2DlpJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
