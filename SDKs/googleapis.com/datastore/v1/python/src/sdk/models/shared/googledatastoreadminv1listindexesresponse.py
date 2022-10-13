from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googledatastoreadminv1index


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1ListIndexesResponse:
    indexes: Optional[List[googledatastoreadminv1index.GoogleDatastoreAdminV1Index]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
