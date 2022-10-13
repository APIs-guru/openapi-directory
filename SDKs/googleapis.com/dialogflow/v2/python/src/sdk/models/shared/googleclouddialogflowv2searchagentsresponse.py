from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2agent


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SearchAgentsResponse:
    agents: Optional[List[googleclouddialogflowv2agent.GoogleCloudDialogflowV2Agent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
