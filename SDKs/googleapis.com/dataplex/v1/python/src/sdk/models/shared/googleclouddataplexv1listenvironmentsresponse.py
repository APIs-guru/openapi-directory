from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1environment


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListEnvironmentsResponse:
    environments: Optional[List[googleclouddataplexv1environment.GoogleCloudDataplexV1Environment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
