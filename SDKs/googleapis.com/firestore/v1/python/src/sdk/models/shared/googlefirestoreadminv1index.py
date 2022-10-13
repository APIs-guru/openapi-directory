from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1indexfield

class GoogleFirestoreAdminV1IndexQueryScopeEnum(str, Enum):
    QUERY_SCOPE_UNSPECIFIED = "QUERY_SCOPE_UNSPECIFIED"
    COLLECTION = "COLLECTION"
    COLLECTION_GROUP = "COLLECTION_GROUP"

class GoogleFirestoreAdminV1IndexStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    NEEDS_REPAIR = "NEEDS_REPAIR"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1Index:
    fields: Optional[List[googlefirestoreadminv1indexfield.GoogleFirestoreAdminV1IndexField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    query_scope: Optional[GoogleFirestoreAdminV1IndexQueryScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryScope' }})
    state: Optional[GoogleFirestoreAdminV1IndexStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
