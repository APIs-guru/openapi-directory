from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum(str, Enum):
    ARRAY_CONFIG_UNSPECIFIED = "ARRAY_CONFIG_UNSPECIFIED"
    CONTAINS = "CONTAINS"

class GoogleFirestoreAdminV1beta2IndexFieldOrderEnum(str, Enum):
    ORDER_UNSPECIFIED = "ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta2IndexField:
    array_config: Optional[GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayConfig' }})
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldPath' }})
    order: Optional[GoogleFirestoreAdminV1beta2IndexFieldOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
