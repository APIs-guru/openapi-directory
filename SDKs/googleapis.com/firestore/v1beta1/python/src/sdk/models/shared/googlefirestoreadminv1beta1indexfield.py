from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleFirestoreAdminV1beta1IndexFieldModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"
    ARRAY_CONTAINS = "ARRAY_CONTAINS"


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta1IndexField:
    r"""GoogleFirestoreAdminV1beta1IndexField
    A field of an index.
    """
    
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    mode: Optional[GoogleFirestoreAdminV1beta1IndexFieldModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
