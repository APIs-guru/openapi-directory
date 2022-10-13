from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicyanalyzerv1activity


@dataclass_json
@dataclass
class GoogleCloudPolicyanalyzerV1QueryActivityResponse:
    activities: Optional[List[googlecloudpolicyanalyzerv1activity.GoogleCloudPolicyanalyzerV1Activity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
