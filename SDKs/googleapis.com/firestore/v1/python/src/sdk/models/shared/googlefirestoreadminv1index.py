from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleFirestoreAdminV1IndexAPIScopeEnum(str, Enum):
    ANY_API = "ANY_API"
    DATASTORE_MODE_API = "DATASTORE_MODE_API"

class GoogleFirestoreAdminV1IndexQueryScopeEnum(str, Enum):
    QUERY_SCOPE_UNSPECIFIED = "QUERY_SCOPE_UNSPECIFIED"
    COLLECTION = "COLLECTION"
    COLLECTION_GROUP = "COLLECTION_GROUP"
    COLLECTION_RECURSIVE = "COLLECTION_RECURSIVE"

class GoogleFirestoreAdminV1IndexStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    NEEDS_REPAIR = "NEEDS_REPAIR"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1Index:
    r"""GoogleFirestoreAdminV1Index
    Cloud Firestore indexes enable simple and complex queries against documents in a database.
    """
    
    api_scope: Optional[GoogleFirestoreAdminV1IndexAPIScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiScope') }})
    fields: Optional[List[GoogleFirestoreAdminV1IndexField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    query_scope: Optional[GoogleFirestoreAdminV1IndexQueryScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryScope') }})
    state: Optional[GoogleFirestoreAdminV1IndexStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
