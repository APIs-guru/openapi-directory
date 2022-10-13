from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicyanalyzerv1beta1activity


@dataclass_json
@dataclass
class GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse:
    activities: Optional[List[googlecloudpolicyanalyzerv1beta1activity.GoogleCloudPolicyanalyzerV1beta1Activity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
