from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1content


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListContentResponse:
    content: Optional[List[googleclouddataplexv1content.GoogleCloudDataplexV1Content]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
