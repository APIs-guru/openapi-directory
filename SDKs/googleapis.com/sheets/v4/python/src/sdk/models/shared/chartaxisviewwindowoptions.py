from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChartAxisViewWindowOptionsViewWindowModeEnum(str, Enum):
    DEFAULT_VIEW_WINDOW_MODE = "DEFAULT_VIEW_WINDOW_MODE"
    VIEW_WINDOW_MODE_UNSUPPORTED = "VIEW_WINDOW_MODE_UNSUPPORTED"
    EXPLICIT = "EXPLICIT"
    PRETTY = "PRETTY"


@dataclass_json
@dataclass
class ChartAxisViewWindowOptions:
    r"""ChartAxisViewWindowOptions
    The options that define a \"view window\" for a chart (such as the visible values in an axis).
    """
    
    view_window_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewWindowMax') }})
    view_window_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewWindowMin') }})
    view_window_mode: Optional[ChartAxisViewWindowOptionsViewWindowModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewWindowMode') }})
    
