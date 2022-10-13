from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collectionstatus


@dataclass_json
@dataclass
class ListCollectionStatusesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resources: Optional[List[collectionstatus.CollectionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
