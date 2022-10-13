from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1field


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1ListFieldsResponse:
    fields: Optional[List[googlefirestoreadminv1field.GoogleFirestoreAdminV1Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
