from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1tag


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ListTagsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tags: Optional[List[googleclouddatacatalogv1tag.GoogleCloudDatacatalogV1Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
