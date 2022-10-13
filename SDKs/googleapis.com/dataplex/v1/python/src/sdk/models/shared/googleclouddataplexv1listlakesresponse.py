from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1lake


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListLakesResponse:
    lakes: Optional[List[googleclouddataplexv1lake.GoogleCloudDataplexV1Lake]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lakes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachableLocations' }})
    
