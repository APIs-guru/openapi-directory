from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudorgpolicyv2constraint


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2ListConstraintsResponse:
    constraints: Optional[List[googlecloudorgpolicyv2constraint.GoogleCloudOrgpolicyV2Constraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
