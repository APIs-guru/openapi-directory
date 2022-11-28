from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta2ImportDocumentsRequest:
    r"""GoogleFirestoreAdminV1beta2ImportDocumentsRequest
    The request for FirestoreAdmin.ImportDocuments.
    """
    
    collection_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionIds') }})
    input_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUriPrefix') }})
    
