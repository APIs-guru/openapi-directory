from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1beta1indexfield

class GoogleFirestoreAdminV1beta1IndexStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta1Index:
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionId' }})
    fields: Optional[List[googlefirestoreadminv1beta1indexfield.GoogleFirestoreAdminV1beta1IndexField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleFirestoreAdminV1beta1IndexStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
