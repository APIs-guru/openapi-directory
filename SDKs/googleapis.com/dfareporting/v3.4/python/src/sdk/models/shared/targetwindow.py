from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TargetWindowTargetWindowOptionEnum(str, Enum):
    NEW_WINDOW = "NEW_WINDOW"
    CURRENT_WINDOW = "CURRENT_WINDOW"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class TargetWindow:
    r"""TargetWindow
    Target Window.
    """
    
    custom_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHtml') }})
    target_window_option: Optional[TargetWindowTargetWindowOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetWindowOption') }})
    
