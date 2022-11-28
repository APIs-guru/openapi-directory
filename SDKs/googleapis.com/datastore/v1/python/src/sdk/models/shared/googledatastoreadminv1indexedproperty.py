from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleDatastoreAdminV1IndexedPropertyDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1IndexedProperty:
    r"""GoogleDatastoreAdminV1IndexedProperty
    A property of an index.
    """
    
    direction: Optional[GoogleDatastoreAdminV1IndexedPropertyDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
