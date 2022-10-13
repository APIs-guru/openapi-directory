from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1entry


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ListEntriesResponse:
    entries: Optional[List[googleclouddatacatalogv1beta1entry.GoogleCloudDatacatalogV1beta1Entry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
