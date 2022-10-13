from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1issueassignment


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelResult:
    issue_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueModel' }})
    issues: Optional[List[googlecloudcontactcenterinsightsv1issueassignment.GoogleCloudContactcenterinsightsV1IssueAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    
