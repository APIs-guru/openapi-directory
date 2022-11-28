from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""CreateLineRequest
    Creates a line.
    """
    
    category: Optional[CreateLineRequestCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    element_properties: Optional[PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementProperties') }})
    line_category: Optional[CreateLineRequestLineCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineCategory') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
