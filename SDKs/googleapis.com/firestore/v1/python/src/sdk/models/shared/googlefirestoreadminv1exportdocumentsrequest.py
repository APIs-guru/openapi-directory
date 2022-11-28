from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1ExportDocumentsRequest:
    r"""GoogleFirestoreAdminV1ExportDocumentsRequest
    The request for FirestoreAdmin.ExportDocuments.
    """
    
    collection_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionIds') }})
    namespace_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceIds') }})
    output_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUriPrefix') }})
    
