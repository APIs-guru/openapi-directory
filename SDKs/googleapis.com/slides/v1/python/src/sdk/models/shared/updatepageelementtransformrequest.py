from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UpdatePageElementTransformRequestApplyModeEnum(str, Enum):
    APPLY_MODE_UNSPECIFIED = "APPLY_MODE_UNSPECIFIED"
    RELATIVE = "RELATIVE"
    ABSOLUTE = "ABSOLUTE"


@dataclass_json
@dataclass
class UpdatePageElementTransformRequest:
    r"""UpdatePageElementTransformRequest
    Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.
    """
    
    apply_mode: Optional[UpdatePageElementTransformRequestApplyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyMode') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    transform: Optional[AffineTransform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transform') }})
    
