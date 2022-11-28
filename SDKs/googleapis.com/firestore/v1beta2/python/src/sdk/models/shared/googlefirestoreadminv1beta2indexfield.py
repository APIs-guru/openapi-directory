from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleFirestoreAdminV1beta2IndexField
    A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
    """
    
    array_config: Optional[GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayConfig') }})
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    order: Optional[GoogleFirestoreAdminV1beta2IndexFieldOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    
