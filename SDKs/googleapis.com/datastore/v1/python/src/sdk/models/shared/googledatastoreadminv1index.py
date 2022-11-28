from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class GoogleDatastoreAdminV1IndexInput:
    r"""GoogleDatastoreAdminV1IndexInput
    Datastore composite index definition.
    """
    
    ancestor: Optional[GoogleDatastoreAdminV1IndexAncestorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestor') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    properties: Optional[List[GoogleDatastoreAdminV1IndexedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclass
class GoogleDatastoreAdminV1Index:
    r"""GoogleDatastoreAdminV1Index
    Datastore composite index definition.
    """
    
    ancestor: Optional[GoogleDatastoreAdminV1IndexAncestorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestor') }})
    index_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    properties: Optional[List[GoogleDatastoreAdminV1IndexedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    state: Optional[GoogleDatastoreAdminV1IndexStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
