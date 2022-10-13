from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1flow


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListFlowsResponse:
    flows: Optional[List[googleclouddialogflowcxv3beta1flow.GoogleCloudDialogflowCxV3beta1Flow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
