from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1issuemodel


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListIssueModelsResponse:
    issue_models: Optional[List[googlecloudcontactcenterinsightsv1issuemodel.GoogleCloudContactcenterinsightsV1IssueModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueModels' }})
    
