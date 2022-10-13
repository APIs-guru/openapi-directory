from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pageelementproperties

class CreateLineRequestCategoryEnum(str, Enum):
    LINE_CATEGORY_UNSPECIFIED = "LINE_CATEGORY_UNSPECIFIED"
    STRAIGHT = "STRAIGHT"
    BENT = "BENT"
    CURVED = "CURVED"

class CreateLineRequestLineCategoryEnum(str, Enum):
    STRAIGHT = "STRAIGHT"
    BENT = "BENT"
    CURVED = "CURVED"


@dataclass_json
@dataclass
class CreateLineRequest:
    category: Optional[CreateLineRequestCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    element_properties: Optional[pageelementproperties.PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementProperties' }})
    line_category: Optional[CreateLineRequestLineCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineCategory' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    
