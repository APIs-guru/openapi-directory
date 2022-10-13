from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1beta2index


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta2ListIndexesResponse:
    indexes: Optional[List[googlefirestoreadminv1beta2index.GoogleFirestoreAdminV1beta2Index]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
