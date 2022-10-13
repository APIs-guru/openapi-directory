from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1asset


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListAssetsResponse:
    assets: Optional[List[googleclouddataplexv1asset.GoogleCloudDataplexV1Asset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
