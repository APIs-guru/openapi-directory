from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1searchcatalogresult


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SearchCatalogResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    results: Optional[List[googleclouddatacatalogv1beta1searchcatalogresult.GoogleCloudDatacatalogV1beta1SearchCatalogResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
