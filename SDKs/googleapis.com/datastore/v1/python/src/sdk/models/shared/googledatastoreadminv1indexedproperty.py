from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleDatastoreAdminV1IndexedPropertyDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1IndexedProperty:
    direction: Optional[GoogleDatastoreAdminV1IndexedPropertyDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
