from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ObaIconPositionEnum(str, Enum):
    OBA_ICON_POSITION_UNSPECIFIED = "OBA_ICON_POSITION_UNSPECIFIED"
    OBA_ICON_POSITION_UPPER_RIGHT = "OBA_ICON_POSITION_UPPER_RIGHT"
    OBA_ICON_POSITION_UPPER_LEFT = "OBA_ICON_POSITION_UPPER_LEFT"
    OBA_ICON_POSITION_LOWER_RIGHT = "OBA_ICON_POSITION_LOWER_RIGHT"
    OBA_ICON_POSITION_LOWER_LEFT = "OBA_ICON_POSITION_LOWER_LEFT"


@dataclass_json
@dataclass
class ObaIcon:
    r"""ObaIcon
    OBA Icon for a Creative
    """
    
    click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTrackingUrl') }})
    dimensions: Optional[Dimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    landing_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landingPageUrl') }})
    position: Optional[ObaIconPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    program: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    resource_mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceMimeType') }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUrl') }})
    view_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewTrackingUrl') }})
    
