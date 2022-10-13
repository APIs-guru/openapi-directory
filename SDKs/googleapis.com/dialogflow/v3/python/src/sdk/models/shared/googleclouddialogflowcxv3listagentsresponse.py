from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3agent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListAgentsResponse:
    agents: Optional[List[googleclouddialogflowcxv3agent.GoogleCloudDialogflowCxV3Agent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
