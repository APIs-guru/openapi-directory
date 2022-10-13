from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2jobtrigger


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListJobTriggersResponse:
    job_triggers: Optional[List[googleprivacydlpv2jobtrigger.GooglePrivacyDlpV2JobTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTriggers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
