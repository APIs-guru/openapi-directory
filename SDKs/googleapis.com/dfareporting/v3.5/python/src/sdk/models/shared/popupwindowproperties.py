from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import size
from . import offsetposition

class PopupWindowPropertiesPositionTypeEnum(str, Enum):
    CENTER = "CENTER"
    COORDINATES = "COORDINATES"


@dataclass_json
@dataclass
class PopupWindowProperties:
    dimension: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    offset: Optional[offsetposition.OffsetPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    position_type: Optional[PopupWindowPropertiesPositionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionType' }})
    show_address_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showAddressBar' }})
    show_menu_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showMenuBar' }})
    show_scroll_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showScrollBar' }})
    show_status_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showStatusBar' }})
    show_tool_bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showToolBar' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
