from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1issue


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListIssuesResponse:
    issues: Optional[List[googlecloudcontactcenterinsightsv1issue.GoogleCloudContactcenterinsightsV1Issue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    
