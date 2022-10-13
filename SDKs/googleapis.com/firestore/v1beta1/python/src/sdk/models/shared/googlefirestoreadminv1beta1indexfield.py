from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleFirestoreAdminV1beta1IndexFieldModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"
    ARRAY_CONTAINS = "ARRAY_CONTAINS"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta1IndexField:
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldPath' }})
    mode: Optional[GoogleFirestoreAdminV1beta1IndexFieldModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
