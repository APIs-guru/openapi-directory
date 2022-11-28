from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleFirestoreAdminV1beta1IndexStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta1Index:
    r"""GoogleFirestoreAdminV1beta1Index
    An index definition.
    """
    
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionId') }})
    fields: Optional[List[GoogleFirestoreAdminV1beta1IndexField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleFirestoreAdminV1beta1IndexStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
