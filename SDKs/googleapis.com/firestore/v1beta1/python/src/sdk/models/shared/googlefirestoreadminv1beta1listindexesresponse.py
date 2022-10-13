from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1beta1index


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta1ListIndexesResponse:
    indexes: Optional[List[googlefirestoreadminv1beta1index.GoogleFirestoreAdminV1beta1Index]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
