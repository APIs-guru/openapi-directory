from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1BorderStyleTypeEnum(str, Enum):
    BORDER_TYPE_UNSPECIFIED = "BORDER_TYPE_UNSPECIFIED"
    NO_BORDER = "NO_BORDER"
    STROKE = "STROKE"


@dataclass_json
@dataclass
class GoogleAppsCardV1BorderStyle:
    r"""GoogleAppsCardV1BorderStyle
    Represents the complete border style applied to items in a widget.
    """
    
    corner_radius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cornerRadius') }})
    stroke_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strokeColor') }})
    type: Optional[GoogleAppsCardV1BorderStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
