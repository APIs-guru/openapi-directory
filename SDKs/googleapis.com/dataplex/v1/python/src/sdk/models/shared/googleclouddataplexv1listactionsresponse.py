from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1action


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListActionsResponse:
    actions: Optional[List[googleclouddataplexv1action.GoogleCloudDataplexV1Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
