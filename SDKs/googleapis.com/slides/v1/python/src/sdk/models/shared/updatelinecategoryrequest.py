from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpdateLineCategoryRequestLineCategoryEnum(str, Enum):
    LINE_CATEGORY_UNSPECIFIED = "LINE_CATEGORY_UNSPECIFIED"
    STRAIGHT = "STRAIGHT"
    BENT = "BENT"
    CURVED = "CURVED"


@dataclass_json
@dataclass
class UpdateLineCategoryRequest:
    r"""UpdateLineCategoryRequest
    Updates the category of a line.
    """
    
    line_category: Optional[UpdateLineCategoryRequestLineCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineCategory') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
