from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1session


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListSessionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sessions: Optional[List[googleclouddataplexv1session.GoogleCloudDataplexV1Session]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    
