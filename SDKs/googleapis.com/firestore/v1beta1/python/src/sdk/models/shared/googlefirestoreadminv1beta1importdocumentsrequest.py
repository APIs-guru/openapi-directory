from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta1ImportDocumentsRequest:
    collection_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionIds' }})
    input_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputUriPrefix' }})
    
