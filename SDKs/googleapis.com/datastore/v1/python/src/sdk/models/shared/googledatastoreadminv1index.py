from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googledatastoreadminv1indexedproperty

class GoogleDatastoreAdminV1IndexAncestorEnum(str, Enum):
    ANCESTOR_MODE_UNSPECIFIED = "ANCESTOR_MODE_UNSPECIFIED"
    NONE = "NONE"
    ALL_ANCESTORS = "ALL_ANCESTORS"

class GoogleDatastoreAdminV1IndexStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1Index:
    ancestor: Optional[GoogleDatastoreAdminV1IndexAncestorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestor' }})
    index_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    properties: Optional[List[googledatastoreadminv1indexedproperty.GoogleDatastoreAdminV1IndexedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    state: Optional[GoogleDatastoreAdminV1IndexStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
