from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudorgpolicyv2customconstraint


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse:
    custom_constraints: Optional[List[googlecloudorgpolicyv2customconstraint.GoogleCloudOrgpolicyV2CustomConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customConstraints' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
