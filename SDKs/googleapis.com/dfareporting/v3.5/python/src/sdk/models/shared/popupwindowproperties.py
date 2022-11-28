from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PopupWindowPropertiesPositionTypeEnum(str, Enum):
    CENTER = "CENTER"
    COORDINATES = "COORDINATES"


@dataclass_json
@dataclass
class PopupWindowProperties:
    r"""PopupWindowProperties
    Popup Window Properties.
    """
    
    dimension: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    offset: Optional[OffsetPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    position_type: Optional[PopupWindowPropertiesPositionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionType') }})
    show_address_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showAddressBar') }})
    show_menu_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showMenuBar') }})
    show_scroll_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showScrollBar') }})
    show_status_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showStatusBar') }})
    show_tool_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showToolBar') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
