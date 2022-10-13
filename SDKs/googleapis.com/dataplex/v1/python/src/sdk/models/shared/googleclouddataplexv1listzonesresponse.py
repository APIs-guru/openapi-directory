from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1zone


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListZonesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    zones: Optional[List[googleclouddataplexv1zone.GoogleCloudDataplexV1Zone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zones' }})
    
