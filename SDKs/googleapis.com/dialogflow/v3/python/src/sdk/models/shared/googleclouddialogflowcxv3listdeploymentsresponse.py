from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3deployment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListDeploymentsResponse:
    deployments: Optional[List[googleclouddialogflowcxv3deployment.GoogleCloudDialogflowCxV3Deployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
