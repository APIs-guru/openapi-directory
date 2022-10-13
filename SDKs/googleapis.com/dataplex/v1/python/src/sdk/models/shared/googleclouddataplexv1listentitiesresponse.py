from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1entity


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListEntitiesResponse:
    entities: Optional[List[googleclouddataplexv1entity.GoogleCloudDataplexV1Entity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
