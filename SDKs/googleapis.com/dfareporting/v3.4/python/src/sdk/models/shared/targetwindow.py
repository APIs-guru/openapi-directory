from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TargetWindowTargetWindowOptionEnum(str, Enum):
    NEW_WINDOW = "NEW_WINDOW"
    CURRENT_WINDOW = "CURRENT_WINDOW"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class TargetWindow:
    custom_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customHtml' }})
    target_window_option: Optional[TargetWindowTargetWindowOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetWindowOption' }})
    
