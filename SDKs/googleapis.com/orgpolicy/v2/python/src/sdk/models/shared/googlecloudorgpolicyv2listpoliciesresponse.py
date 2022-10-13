from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudorgpolicyv2policy


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2ListPoliciesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    policies: Optional[List[googlecloudorgpolicyv2policy.GoogleCloudOrgpolicyV2Policy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    
