from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UpdateLineCategoryRequestLineCategoryEnum(str, Enum):
    LINE_CATEGORY_UNSPECIFIED = "LINE_CATEGORY_UNSPECIFIED"
    STRAIGHT = "STRAIGHT"
    BENT = "BENT"
    CURVED = "CURVED"


@dataclass_json
@dataclass
class UpdateLineCategoryRequest:
    line_category: Optional[UpdateLineCategoryRequestLineCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineCategory' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    
