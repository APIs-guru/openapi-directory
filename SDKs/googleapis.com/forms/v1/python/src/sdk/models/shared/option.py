from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import image

class OptionGoToActionEnum(str, Enum):
    GO_TO_ACTION_UNSPECIFIED = "GO_TO_ACTION_UNSPECIFIED"
    NEXT_SECTION = "NEXT_SECTION"
    RESTART_FORM = "RESTART_FORM"
    SUBMIT_FORM = "SUBMIT_FORM"


@dataclass_json
@dataclass
class Option:
    go_to_action: Optional[OptionGoToActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goToAction' }})
    go_to_section_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goToSectionId' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    is_other: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isOther' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
