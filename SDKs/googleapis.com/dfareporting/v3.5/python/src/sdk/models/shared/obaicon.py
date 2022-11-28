from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObaIcon:
    r"""ObaIcon
    Online Behavioral Advertiser icon.
    """
    
    icon_click_through_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconClickThroughUrl') }})
    icon_click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconClickTrackingUrl') }})
    icon_view_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconViewTrackingUrl') }})
    program: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUrl') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    x_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xPosition') }})
    y_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yPosition') }})
    
