from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3flow


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListFlowsResponse:
    flows: Optional[List[googleclouddialogflowcxv3flow.GoogleCloudDialogflowCxV3Flow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
