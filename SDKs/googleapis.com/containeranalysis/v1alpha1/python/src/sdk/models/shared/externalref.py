from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ExternalRefCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    SECURITY = "SECURITY"
    PACKAGE_MANAGER = "PACKAGE_MANAGER"
    PERSISTENT_ID = "PERSISTENT_ID"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class ExternalRef:
    category: Optional[ExternalRefCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    locator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locator' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
