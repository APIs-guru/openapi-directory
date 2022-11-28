from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MediaPropertiesAlignmentEnum(str, Enum):
    ALIGNMENT_UNSPECIFIED = "ALIGNMENT_UNSPECIFIED"
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    CENTER = "CENTER"


@dataclass_json
@dataclass
class MediaProperties:
    r"""MediaProperties
    Properties of the media.
    """
    
    alignment: Optional[MediaPropertiesAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignment') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
