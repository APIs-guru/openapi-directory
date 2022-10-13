from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChartAxisViewWindowOptionsViewWindowModeEnum(str, Enum):
    DEFAULT_VIEW_WINDOW_MODE = "DEFAULT_VIEW_WINDOW_MODE"
    VIEW_WINDOW_MODE_UNSUPPORTED = "VIEW_WINDOW_MODE_UNSUPPORTED"
    EXPLICIT = "EXPLICIT"
    PRETTY = "PRETTY"


@dataclass_json
@dataclass
class ChartAxisViewWindowOptions:
    view_window_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewWindowMax' }})
    view_window_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewWindowMin' }})
    view_window_mode: Optional[ChartAxisViewWindowOptionsViewWindowModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewWindowMode' }})
    
